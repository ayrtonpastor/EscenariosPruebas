const po = require('../page-objects')
exports.escenario20 = async(url, browser, scenarioTag, email, password, loggedUserName, tagName, tagStatus) => {

    console.log('Inicia escenario: ' + scenarioTag)
    //construye y dispara el navegador por parametro "chromium, firefox o webkit"
    let page = await po.construirBrowser(browser)
    let savedTag = false

    try {
        //navega a la url que llega por parametro
        await po.navegarUrl(page, url)

        //escribe correo y contraseña enviados por parametro en los inputs respectivos
        await po.realizarLogin(page, email, password)
        await po.clickBotonLogin(page)

        //verifica que el login se haga correctamente y que se visualice la pagina principal de ghost
        await po.verificarLoginCorrecto(page, loggedUserName)
        await po.tomarCaptura(page, scenarioTag)

        // navega a una subruta dada por parametro
        await po.navegarA(page, "tags")
        await po.tomarCaptura(page, scenarioTag)

        //da click en el boton de crear nuevo tag
        await po.clicEn(page, "New tag")
        await po.tomarCaptura(page, scenarioTag)

        // escribe valores por parametro de titulo y texto en los input de editor de post
        await po.completarParametrosDeTag(page, tagName, tagStatus)
        await po.clicEn(page, "Save")
        await po.tomarCaptura(page, scenarioTag)

        // volver a vista de tags, filtrar y editar el nuevo tag
        await po.navegarA(page, "tags")
        savedTag = true
        await po.tomarCaptura(page, scenarioTag)
        await po.filtrarYEditarTag(page, tagName, tagStatus)
        await po.tomarCaptura(page, scenarioTag)

        // elimina el tag desde su formulario
        await po.eliminarTag(page)
        await po.tomarCaptura(page, scenarioTag)

        //validar eliminación de tag
        await po.validarEliminacionDeTag(page, tagName, tagStatus)

        console.log('Se realizaron todos steps con éxito')
        console.log('Parámetros ingresados:')
        console.log(`Nombre de tag => ${tagName}`)
        //cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
    } catch {
        console.log('No se realizaron todos los steps')
        console.log('Parámetros ingresados:')
        console.log(`Nombre de tag => ${tagName}`)
        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
    }
}