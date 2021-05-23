const po = require('../page-objects')
exports.escenario13 = async(url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, navSubRoute, newStaffName, oldStaffName) => {

    console.log('Inicia escenario: ' + scenarioTag)

    //construye y dispara el navegador por parametro "chromium, firefox o webkit"
    let page = await po.construirBrowser(browser)

    try {
        //navega a la url que llega por parametro
        await po.navegarUrl(page, url)

        //Realiza una captura de pantalla para un tag de escenario enviado por parametro
        await po.tomarCaptura(page, scenarioTag)

        //escribe correo y contraseña enviados por parametro en los inputs respectivos
        await po.realizarLogin(page, correctEmail, correctPass)

        //da click en el boton de Login
        await po.clickBotonLogin(page)


        //verifica que el login se haga correctamente y que se visualice la pagina principal de ghost
        await po.verificarLoginCorrecto(page, loggedUserName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // navega a una subruta dada por parametro
        await po.navegarA(page, navSubRoute)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //Modifica el nombre del staff ghost por aquel que entre por parametro
        await po.modificarStaff(page, newStaffName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // verifica que el nombre del staff se cambie en el listado de staffs
        await po.verificarStaffModificado(page, newStaffName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // ...
        await po.navegarA(page, navSubRoute)

        //...
        await po.modificarStaff(page, oldStaffName)


        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)

        console.log('Finaliza escenario: ' + scenarioTag)
    } catch {
        //... cierra el navegador y termina la prueba
        console.log('No se realizaron todos los steps')
        console.log('---------------------------------------------------------------------------------------')
        console.log([url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, navSubRoute, newStaffName, oldStaffName])
        console.log('---------------------------------------------------------------------------------------')
        await po.cerrarNavegador(page)
    }
}