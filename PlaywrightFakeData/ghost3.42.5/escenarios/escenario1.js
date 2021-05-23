const po = require('../page-objects')
exports.escenario1 = async(url, browser, scenarioTag, wrongEmail, wrongPass, correctEmail, correctPass, loggedUserName, navSubRoute) => {

    console.log('Inicia escenario: ' + scenarioTag)

    //construye y dispara el navegador por parametro "chromium, firefox o webkit"
    let page = await po.construirBrowser(browser)
    try {
        //navega a la url que llega por parametro
        await po.navegarUrl(page, url)

        //escribe correo y contraseña enviados por parametro en los inputs respectivos
        await po.realizarLogin(page, wrongEmail, wrongPass)

        //da click en el boton de Login
        await po.clickBotonLogin(page)

        //Verifica si al dar click en el login se arroja un mensaje de error
        await po.verificarErrorLogin(page)

        //Realiza una captura de pantalla para un tag de escenario enviado por parametro
        await po.tomarCaptura(page, scenarioTag)

        //...
        await po.realizarLogin(page, correctEmail, correctPass)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //...
        await po.clickBotonLogin(page)

        //verifica que el login se haga correctamente y que se visualice la pagina principal de ghost. Recibe el nombre del usuario logueado por parametro
        await po.verificarLoginCorrecto(page, loggedUserName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //.. vanega a una subruta dada por parametro
        await po.navegarA(page, navSubRoute)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //cierra la sesion de ghost y verifica que se muestre la pagina de login. Recibe el nombre del usuario logueado por parametro
        await po.cerrarSesion(page, loggedUserName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)

        console.log('Finaliza escenario: ' + scenarioTag)
    } catch {
        //... cierra el navegador y termina la prueba
        console.log('No se realizaron todos los steps')
        console.log('---------------------------------------------------------------------------------------')
        console.log([url, browser, scenarioTag, wrongEmail, wrongPass, correctEmail, correctPass, loggedUserName, navSubRoute])
        console.log('---------------------------------------------------------------------------------------')
        await po.cerrarNavegador(page)
    }

}