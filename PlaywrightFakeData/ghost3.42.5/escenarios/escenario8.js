const po = require('../page-objects')
exports.escenario8 = async(url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, navSubRoute, pageTitle, pageDescription) => {

    console.log('Inicia escenario: ' + scenarioTag)
    //construye y dispara el navegador por parametro "chromium, firefox o webkit"
    let page = await po.construirBrowser(browser)
    let savedPage = false

    try {
        //navega a la url que llega por parametro
        await po.navegarUrl(page, url)

        //escribe correo y contraseña enviados por parametro en los inputs respectivos
        await po.realizarLogin(page, correctEmail, correctPass)

        //Realiza una captura de pantalla para un tag de escenario enviado por parametro
        await po.tomarCaptura(page, scenarioTag)

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

        //da click en el boton de crear nuevo post
        await po.clickNuevoPage(page)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // escribe valores por parametro de titulo y texto en los input de editor de post
        await po.escribirMockEnPost(page, pageTitle, pageDescription)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // publica el post
        await po.publicarPost(page);
        savedPage = true
        //...
        await po.navegarA(page, navSubRoute)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // verifica si el post fue publicado correctamente
        // await po.verificarPostPublicado(page, pageTitle)

        //Elimina el post cuyo titulo entra por parametro

        await po.eliminarPost(page, pageTitle)

        //...
        await po.navegarA(page, navSubRoute)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //Verifica que el post se elimino correctamente
        // await po.verificarPostEliminado(page, pageTitle)

        console.log('Se realizaron todos steps con éxito')
        console.log('Parámetros ingresados:')
        console.log(`título de page => ${pageTitle}`)
        console.log(`descripción de page => ${pageDescription}`)
        //cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
    } catch {
        await po.navegarA(page, navSubRoute)
        await po.verificarModalErrorLongTitle(page)
        //... cierra el navegador y termina la prueba
        console.log('No se realizaron todos los steps')
        console.log('Parámetros ingresados:')
        console.log(`Título de page => ${pageTitle}`)
        console.log(`Descripción de page => ${pageDescription}`)
        await po.cerrarNavegador(page)
    }
}