const { exec } = require('child_process');
const fs = require('fs');
const pathImagesArray = "../Playwright/ghost3.3.0/screenshots";
//Se carga los escenarios requeridos junto con el numero de screenshots a revisar

(async() => {
    let escenarios = [];
    //@param version: relaciona la version de ghost a tomar como referencia
    //@param fileName: nombre del archivo .json a generar
    generateJson = async(version, fileName) => {
        let inicio = `{
      "id": "backstopVRT",
      "viewports": [
        {
          "label": "standard",
          "width": 800,
          "height": 600
        }
      ],
      "onBeforeScript": "puppet/onBefore.js",
      "onReadyScript": "puppet/onReady.js",`

        let final = `
      "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
      },
      "report": ["browser"],
      "engine": "puppeteer",
      "engineOptions": {
        "args": ["--no-sandbox"]
      },
      "asyncCaptureLimit": 5,
      "asyncCompareLimit": 50,
      "debug": false,
      "debugWindow": false
    }`
        let listaEscenarios = '';
        for (let i = 0; i < escenarios.length; i += 1) {
            for (let j = 0; j < escenarios[i][1]; j += 1) {
                if (i == escenarios.length - 1 && j == escenarios[i][1] - 1) {
                    listaEscenarios = listaEscenarios +
                        `{
                  "label": "${escenarios[i][0]}-${j+1}",
                  "cookiePath": "backstop_data/engine_scripts/cookies.json",
                  "url": "../Playwright/ghost${version}/screenshots/${escenarios[i][0]}/${escenarios[i][0]}-${j+1}.png",
                  "referenceUrl": "",
                  "readyEvent": "",
                  "readySelector": "",
                  "delay": 0,
                  "hideSelectors": [],
                  "removeSelectors": [],
                  "hoverSelector": "",
                  "clickSelector": "",
                  "postInteractionWait": 0,
                  "selectors": [],
                  "selectorExpansion": false,
                  "expect": 0,
                  "misMatchThreshold" : 0.1,
                  "requireSameDimensions": true
              }`
                } else {
                    listaEscenarios = listaEscenarios +
                        `{
                  "label": "${escenarios[i][0]}-${j+1}",
                  "cookiePath": "backstop_data/engine_scripts/cookies.json",
                  "url": "../Playwright/ghost${version}/screenshots/${escenarios[i][0]}/${escenarios[i][0]}-${j+1}.png",
                  "referenceUrl": "",
                  "readyEvent": "",
                  "readySelector": "",
                  "delay": 0,
                  "hideSelectors": [],
                  "removeSelectors": [],
                  "hoverSelector": "",
                  "clickSelector": "",
                  "postInteractionWait": 0,
                  "selectors": [],
                  "selectorExpansion": false,
                  "expect": 0,
                  "misMatchThreshold" : 0.1,
                  "requireSameDimensions": true
              },
              `
                }
            }
        }
        // Data consolidada para generacion de JSON
        let configuracionEscenarios = `"scenarios": [${listaEscenarios}],`

        // Genera JSON de configuracion 
        fs.writeFile(`${fileName}.json`, inicio + configuracionEscenarios + final, (err) => {
            // In case of a error throw err.
            if (err) throw err;
        })
    }

    generateScenarioArray = async(path) => {
        folders = fs.readdirSync(path);
        newElemArray = [];
        await folders.forEach(function(folder) {
            if(['e1','e2','e3','e11','e12','e13','e14','e16','e17','e18','e19'].includes(folder)){
                newElemArray.push([folder, fs.readdirSync(`${path}/${folder}`).length])
            }
        });
        escenarios = await newElemArray
        console.log(await escenarios)
    }

    // Genera el array de escenarios segun el tamaño interno de la carpeta screenshots
    await generateScenarioArray(pathImagesArray)

    // Generar JSON de configuracion para la referencia de screeshot en version 3.3.0
    await generateJson('3.3.0', 'reference');
    //Generar JSON de configuracion para la ejecucion del VRT con version 3.342.5
    await generateJson('3.42.5', 'testConfig');

    // Registra las imagenes de referencia desde la version Ghost 3.3.0
    await exec('backstop reference --config="reference.json"', { encoding: 'utf-8' });
    // Realiza las pruebas VRT con backstop
    await exec('backstop test --config="testConfig.json"', { encoding: 'utf-8' });

})();