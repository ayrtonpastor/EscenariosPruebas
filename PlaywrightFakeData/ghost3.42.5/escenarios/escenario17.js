const po = require('../page-objects')
exports.escenario17 = async(url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, navSubRoute, postTitle, textPost, longPostTitle) => {

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

        //da click en el boton de crear nuevo post
        await po.clickNuevoPage(page)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // escribe valores por parametro de titulo y texto en los input de editor de post
        await po.escribirMockEnPost(page, postTitle, textPost)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // publica el post
        await po.publicarPost(page);

        //...
        await po.navegarA(page, navSubRoute)

        //... navega al post existente anteriormente creado
        await po.navegaraPostExistente(page, postTitle)

        //...
        await po.escribirMockEnPost(page, longPostTitle, textPost)

        //...
        await po.publicarPost(page)

        //...
        await po.navegarA(page, navSubRoute)

        // verifica que se muestre un error al introducir un titulo de mas de 255 caracteres
        await po.verificarModalErrorLongTitle(page)

        //...
        await po.eliminarPost(page, postTitle)


        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)

        console.log('Finaliza escenario: ' + scenarioTag)
    } catch {
        //... cierra el navegador y termina la prueba
        console.log('No se realizaron todos los steps')
        console.log('---------------------------------------------------------------------------------------')
        console.log(url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, navSubRoute, postTitle, textPost, longPostTitle)
        console.log('---------------------------------------------------------------------------------------')
        await po.cerrarNavegador(page)
    }
}