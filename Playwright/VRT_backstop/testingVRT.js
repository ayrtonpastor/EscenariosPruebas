const { exec } = require('child_process');
const fs = require('fs');
const escenarios = [['e2',7],['e4',6]];

function generateJson(version,fileName) {
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
    for (let i=0; i< escenarios.length; i+=1) {   
        for (let j=0; j< escenarios[i][1]; j+=1) {
            if (i==escenarios.length-1 && j==escenarios[i][1]-1){
                listaEscenarios = listaEscenarios +  
                `{
                    "label": "${escenarios[i][0]}-${j+1}",
                    "cookiePath": "backstop_data/engine_scripts/cookies.json",
                    "url": ".././ghost${version}/screenshots/${escenarios[i][0]}/${escenarios[i][0]}-${j+1}.png",
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
                    "url": ".././ghost${version}/screenshots/${escenarios[i][0]}/${escenarios[i][0]}-${j+1}.png",
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


// Generar JSON de configuracion para la referencia de screeshot en version 3.3.0
generateJson('3.3.0','reference');
//Generar JSON de configuracion para la ejecucion del VRT con version 3.342.5
generateJson('3.42.5','testConfig');

// Registra las imagenes de referencia desde la version Ghost 3.3.0
exec('backstop reference --config="reference.json"', { encoding: 'utf-8' });
// Realiza las pruebas VRT con backstop
setTimeout(() => {
    exec('backstop test --config="testConfig.json"', { encoding: 'utf-8' });
  }, 5000);


