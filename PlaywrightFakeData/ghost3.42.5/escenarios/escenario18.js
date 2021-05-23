const po = require('../page-objects')
exports.escenario18 = async(url, browser, scenarioTag, correctEmail, correctPass, loggedUserName, postTitle, textPost, tagName, tagStatus) => {

    console.log('Escenario '+ scenarioTag +': Crear etiqueta y asignarla a post')
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
        await po.verificarLoginUsuarioCorrecto(page,loggedUserName)

        //...
        await po.tomarCaptura(page, scenarioTag)

        // navega a una subruta dada por parametro
        await po.navegarA(page, 'tags')

        //...
        await po.tomarCaptura(page, scenarioTag)


        //da click en el boton de crear nuevo tag
        await po.clicEn(page, "New tag")
        //...
        await po.tomarCaptura(page, scenarioTag)

        // escribe valores por parametro de titulo y texto en los input de editor de post
        await po.completarParametrosDeTag(page, tagName, tagStatus)
        await po.clicEn(page, "Save")
        await po.tomarCaptura(page, scenarioTag)

        // volver a vista de tags, filtrar y editar el nuevo tag
        await po.navegarA(page, "posts")
        await po.tomarCaptura(page, scenarioTag)

        // abrir formulario para crear post
        await po.clicEn(page, "New post")
        await po.tomarCaptura(page, scenarioTag)

        // Llenar datos de post
        await po.escribirMockEnPost(page, postTitle, textPost)
        //...
        await po.tomarCaptura(page, scenarioTag)

        //Asignar etiqueta
        await po.asignarEtiquetaAPost(page, postTitle, tagName, tagStatus)

        //Publicar el post
        await po.publicarPost(page);

        // navegar a posts
        await po.navegarA(page, "posts")
        //...
        await po.tomarCaptura(page, scenarioTag)

        // filtro los posts con el tag creado
        await po.filtrarPostsPorTag(page, tagName, tagStatus)
        //...
        await po.tomarCaptura(page, scenarioTag)

        // validar la existencia del post recientemente creado
        await po.validarEtiquetaAPost(page, postTitle)

        // restauración
        await po.navegarA(page, "posts")
        await po.eliminarPost(page, postTitle)

        await po.navegarA(page, "tags")
        await po.filtrarYEditarTag(page, tagName, tagStatus)


        //cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
        console.log('Escenario '+ scenarioTag +': Finalizado')
    } catch {
        //cierra el navegador y termina la prueba
        await po.cerrarNavegador(page)
        console.log('Escenario '+ scenarioTag +': No se realizaron todos los steps por estado inesperado')
        
          
    }
}