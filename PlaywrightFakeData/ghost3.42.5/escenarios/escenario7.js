const po = require('../page-objects')
exports.escenario7 = async (url, browser, scenarioTag, email, pass, loggedUserName, navSubRoute,
    pageTitle) => {


    console.log('Inicia escenario: ' + scenarioTag)

    //construye y dispara el navegador por parametro "chromium, firefox o webkit"
    let page = await po.construirBrowser(browser)
    try {
        //navega a la url que llega por parametro
        await po.navegarUrl(page, url)

        //escribe correo y contraseña enviados por parametro en los inputs respectivos
        await po.realizarLogin(page, email, pass)

        //Realiza una captura de pantalla para un tag de escenario enviado por parametro
        await po.tomarCaptura(page, scenarioTag)

        //da click en el boton de Login
        await po.clickBotonLogin(page)

        //verifica que el login se haga correctamente y que se visualice la pagina principal de ghost
        await po.verificarLoginUsuarioCorrecto(page, loggedUserName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //.. vanega a una subruta dada por parametro
        await po.navegarA(page, navSubRoute)

        //Realiza una captura de pantalla para un tag de escenario enviado por parametro
        await po.tomarCaptura(page, scenarioTag)

        //da click en el boton de crear nuevo post
        await po.clickNuevoPage(page)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // escribe valores por parametro de titulo y texto en los input de editor de post
        await po.escribirMockEnPost(page, pageTitle, "")

        //...
        await po.tomarCaptura(page, scenarioTag)

        //...
        await po.guardarDraft(page, navSubRoute + '/')

        //...
        await po.tomarCaptura(page, scenarioTag)

        await po.clickElementWithTile(page, pageTitle)

        //...
        await po.tomarCaptura(page, scenarioTag)

        await po.deleteCurrentDraft(page)

        await po.navegarA(page, navSubRoute)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
    } catch {
        console.log("Datos invalidos, comportamiento inesperado para el escenario")
        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
    }
}