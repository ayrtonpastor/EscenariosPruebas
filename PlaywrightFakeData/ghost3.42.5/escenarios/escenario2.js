const po = require('../page-objects')
exports.escenario2 = async (url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, navSubRoute, ghostEmail, newPass) => {

    
    console.log('Escenario '+ scenarioTag +': Cambiar contrasena usuario Ghost')

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
        await po.verificarLoginUsuarioCorrecto(page, loggedUserName)

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

        // Realiza el cambio de password del usuario Ghost
        await po.realizarCambioPassword(page, newPass)

        //...
        await po.tomarCaptura(page, scenarioTag)

        //Cierra la sesion
        await po.cerrarSesion(page, loggedUserName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // Rea;iza un nuevo login con usuario Ghost para validar cambio
        await po.realizarLogin(page, ghostEmail, newPass)

        // da click en el boton login
        await po.clickBotonLogin(page)

        //Verifica que se ingreso con el usuario Ghost
        await po.verificarLoginUsuarioCorrecto(page, 'Ghost')

        //...
        await po.tomarCaptura(page, scenarioTag)

        //Cierra la sesion de usuario Ghost
        await po.cerrarSesion(page, 'Ghost')
        
        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
        console.log('Escenario '+ scenarioTag +': Finalizado')
    } catch {
        //cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
        console.log('Escenario '+ scenarioTag +': No se realizaron todos los steps por estado inesperado')
        
    }
}