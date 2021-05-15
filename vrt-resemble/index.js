const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");
let ejs = require('ejs');
var assert = require('assert');


const TEMPLATE_PATH = './template.ejs';
const ESCENARIOS = ['e1', 'e2', 'e3', 'e11', 'e12', 'e13', 'e14'
    , 'e16', 'e17', 'e18', 'e19']

const SC_GH$3_3_3$PATH = '../Playwright/ghost3.3.0/screenshots'
const SC_GH$3_42_5$PATH = '../Playwright/ghost3.42.5/screenshots'
const REPORT_DIR = './reporte'

const create_dir = (path) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

create_dir(REPORT_DIR)
create_dir(REPORT_DIR + '/diff')
create_dir(REPORT_DIR + '/v3.3.0/')
create_dir(REPORT_DIR + '/v3.42.5/')

ESCENARIOS.forEach(escenario => {
    create_dir(REPORT_DIR + '/diff/' + escenario);
    create_dir(REPORT_DIR + '/v3.3.0/' + escenario);
    create_dir(REPORT_DIR + '/v3.42.5/' + escenario);
})

async function getDiff() {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    let ejs_data = {
        "escenarios": []
    }

    for (let escenario of ESCENARIOS) {
        let ejs_escenario = {
            "name": escenario,
            "pasos": []
        }
        console.log("Ejecutando comparacion escenario" + escenario)
        e_gh_v1 = fs.readdirSync(SC_GH$3_3_3$PATH + '/' + escenario)
        e_gh_v2 = fs.readdirSync(SC_GH$3_42_5$PATH + '/' + escenario)
        assert(e_gh_v1.length == e_gh_v2.length)
        for (let i = 0; i < e_gh_v1.length; ++i) {
            const first_image_path = SC_GH$3_3_3$PATH + '/' + escenario + '/' + e_gh_v1[i];
            const second_image_path = SC_GH$3_42_5$PATH + '/' + escenario + '/' + e_gh_v2[i];

            const result_path = REPORT_DIR + '/diff/' + escenario + '/' + e_gh_v1[i];
            const v1_copy_path = REPORT_DIR + '/v3.3.0/' + escenario + '/' + e_gh_v1[i]
            const v2_copy_path = REPORT_DIR + '/v3.42.5/' + escenario + '/' + e_gh_v2[i]

            assert(e_gh_v1[i] == e_gh_v2[i])
            const image_1 = await fs.readFile(first_image_path)
            const image_2 = await fs.readFile(second_image_path)
            const data = await compareImages(
                image_1,
                image_2,
                options
            );
            await fs.writeFile(result_path, data.getBuffer());
            await fs.writeFile(v1_copy_path, image_1);
            await fs.writeFile(v2_copy_path, image_2);
            let ejs_paso = {
                "name": e_gh_v2[i],
                "first_img_path": './v3.3.0/' + escenario + '/' + e_gh_v1[i],
                "second_img_path": './v3.42.5/' + escenario + '/' + e_gh_v2[i],
                "diff_img_path": './diff/' + escenario + '/' + e_gh_v1[i],
                "diff_data": data
            }

            ejs_escenario.pasos.push(ejs_paso)
        }
        ejs_data.escenarios.push(ejs_escenario)
    }
    return ejs_data
}

getDiff().then(ejs_data => {
    ejs.renderFile(TEMPLATE_PATH, ejs_data, (err, html) => {
        fs.writeFile(REPORT_DIR + "/reporte.html", html);
    })
});
