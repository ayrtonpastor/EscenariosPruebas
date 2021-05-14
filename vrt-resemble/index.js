const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");
let ejs = require('ejs');


const TEMPLATE_PATH = './template.ejs';
const ESCENARIOS = ['e1'] 


const data = {
    'escenarios' : [
        {
            'name' : 'e1',
            'pasos' : [
                {}, {}
            ]
        },
        {
            'name' : 'e2',
            'pasos' : [
                {}, {}
            ]
        }
    ]
}

const REPORT_DIR = './reporte'

if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR);
}

ejs.renderFile(TEMPLATE_PATH, data, (err, html) =>{
    fs.writeFile(REPORT_DIR+"/reporte.html", html);
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

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile("../Playwright/ghost3.3.0/screenshots/e1/e1-1.png"),
        await fs.readFile("../Playwright/ghost3.42.5/screenshots/e1/e1-1.png"),
        options
    );

    console.log(data);

    await fs.writeFile("./output.png", data.getBuffer());
}

getDiff();
