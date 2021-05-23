const po = require('../page-objects')
exports.escenario16 = async(url, browser, scenarioTag, email, password, loggedUserName, postName, tagName, tagStatus) => {

    console.log('Inicia escenario: ' + scenarioTag)
    //construye y dispara el navegador por parametro "chromium, firefox o webkit"
    let page = await po.construirBrowser(browser)
    let savedPost = false
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
        await po.navegarA(page, "posts")
        savedTag = false
        await po.tomarCaptura(page, scenarioTag)

        // abrir formulario para crear post
        await po.clicEn(page, "New post")
        await po.tomarCaptura(page, scenarioTag)

        // completar formulario y asignar etiqueta
        await po.escribirMockEnPost(page, postName, "Descripción de " + postName.toLowerCase())
        await po.tomarCaptura(page, scenarioTag)
        await po.asignarEtiquetaAPost(page, postName, tagName, tagStatus)
        await po.publicarPost(page);
        savedPost = true

        // navegar a posts
        await po.navegarA(page, "posts")
        await po.tomarCaptura(page, scenarioTag)

        // filtro los posts con el tag creado
        await po.filtrarPostsPorTag(page, tagName, tagStatus)
        await po.tomarCaptura(page, scenarioTag)

        // restauración
        await po.navegarA(page, "posts")
        await po.eliminarPost(page, postName)

        await po.navegarA(page, "tags")
        await po.filtrarYEditarTag(page, tagName, tagStatus)
        await po.eliminarTag(page)

        console.log('Se realizaron todos steps con éxito')
        console.log('Parámetros ingresados:')
        console.log(`Título de post => ${postName}`)
        console.log(`Nombre de tag => ${tagName}`)
        //cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
    } catch (err) {
        if (savedTag){
            await po.navegarA(page, "tags")
            await po.verificarModalErrorLongTitle(page)
            await po.eliminarUltimoTag(page, tagStatus, tagName)

            if (savedPost){
                await po.navegarA(page, "posts")
                await po.eliminarUltimoPostOPage(page)
            }
        }
        console.log('No se realizaron todos los steps')
        console.log('Parámetros ingresados:')
        console.log(`Título de post => ${postName}`)
        console.log(`Nombre de tag => ${tagName}`)
        //... cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
    }
}