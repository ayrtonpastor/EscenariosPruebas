const po = require('../page-objects')
exports.escenario15 = async (url, browser, scenarioTag, email, pass, navSubRoute, postTitle, img_url) => {

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

        //.. vanega a una subruta dada por parametro
        await po.navegarA(page, navSubRoute)

        //Realiza una captura de pantalla para un tag de escenario enviado por parametro
        await po.tomarCaptura(page, scenarioTag)

        //da click en el boton de crear nuevo post
        await po.clickNuevoPost(page)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // escribe valores por parametro de titulo y texto en los input de editor de post
        await po.escribirMockEnPost(page, postTitle, "")
        //...
        await po.tomarCaptura(page, scenarioTag)

        await po.enterImageContentToPost(page, img_url)

        await po.tomarCaptura(page, scenarioTag)

        await po.performActionOnElement(page, "Publish", "Post")

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