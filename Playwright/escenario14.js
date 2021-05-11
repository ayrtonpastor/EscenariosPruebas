const po = require('./page-objects')
exports.escenario14 = async(url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, navSubRoute, newRol) => {


    //chromium, firefox o webkit
    console.log('Escenario 14: Cambiar rol usuario Ghost')
    //construye y dispara el navegador por parametro "chromium, firefox o webkit"
    let page = await po.construirBrowser(browser)
    
    //navega a la url que llega por parametro
    await po.navegarUrl(page, url)

    //Realiza una captura de pantalla para un tag de escenario enviado por parametro
    await po.tomarCaptura(page, scenarioTag)

    //escribe correo y contraseña enviados por parametro en los inputs respectivos
    await po.realizarLogin(page, correctEmail, correctPass)

    //da click en el boton de Login    
    await po.clickBotonLogin(page)

    //verifica que el login se haga correctamente y que se visualice la pagina principal de ghost
    await po.verificarLoginUsuarioCorrecto(page,loggedUserName)
    
    //...
    await po.tomarCaptura(page, scenarioTag)

    // navega a una subruta dada por parametro
    await po.navegarA(page, navSubRoute)

    //...
    await po.tomarCaptura(page, scenarioTag)

    // navega a una subruta dada por parametro
    await po.navegarA(page, navSubRoute + '/ghost')

    //...
    await po.tomarCaptura(page, scenarioTag)

    //Realiza el cambio de rol al usuario Ghost
    await po.realizarCambioRol(page,newRol)

    //...
    await po.tomarCaptura(page, scenarioTag)

    // navega a una subruta dada por parametro    
    await po.navegarA(page, navSubRoute)

    //Verfica que el rol cambio a Editor
    await po.verificarRolCorrecto(page, newRol, 'Ghost')

    //...
    await po.tomarCaptura(page, scenarioTag) 

    //Cierra la sesion
    await po.cerrarSesion(page)

    //Cierra el navegador y termina la prueba
    await po.cerrarNavegador(page)
    console.log('Escenario 14: Finalizado')

}