const e1 = require('./escenario1')
const e2 = require('./escenario2')
const e4 = require('./escenario4')
const e5 = require('./escenario5')
const e6 = require('./escenario6')
const e8 = require('./escenario8')
const e9 = require('./escenario9')
const e10 = require('./escenario10')
const e13 = require('./escenario13')
const e17 = require('./escenario17')
const e12 = require('./escenario12')
const e16 = require('./escenario16')
const e20 = require('./escenario20')
const url = 'http://localhost:2369/ghost/';


//Función flecha asíncrona
(async() => {
    //Escenario 1 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param wrongEmail: un correo erroneo para el login
    //@param wrongPass: una contraseña erronea para el login
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    await e1.escenario1(
            url,
            'chromium',
            'e1',
            'asdf@uniandes.edu.co',
            'fhadfshdasf',
            'administrador123@example.com',
            'administrador123',
            'Ayrton Pastor C',
            'staff'
        )
        //Escenario 2 que recibe por parametro:
        //@param url: constante global de url de pagina
        //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
        //@param scenarioTag: tag del escenario
        //@param correctEmail: un correo valido y existente para el login
        //@param correctPass: una contraseña valida y correcta para el login
        //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
        //@param navSubRoute: ruta a la que se quiere navegar en la prueba
        //@param postTitle: titulo del post
        //@param textPost: texto del post
    await e2.escenario2(
        url,
        'chromium',
        'e2',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'staff',
        'ghost-author@example.com',
        '1234567890$'
    );

    //Escenario 5 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    //@param postTitle: titulo del post
    //@param textPost: texto del post
    await e5.escenario5(
        url,
        'chromium',
        'e5',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'posts',
        'Post Nuevo Prueba',
        'texto de prueba del post'
    );

    //Escenario 6 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    //@param postTitle: titulo del post
    //@param textPost: texto del post
    await e6.escenario6(
        url,
        'chromium',
        'e6',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'posts',
        'Post Escenario 6',
        'texto de prueba del post'
    );

    //Escenario 9 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    //@param postTitle: titulo del post
    //@param textPost: texto del post
    await e9.escenario9(
        url,
        'chromium',
        'e9',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'pages',
        'Page Nueva Prueba',
        'texto de prueba de la pagina'
    );

    //Escenario 13 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    //@param newStaffName: nuevo nombre del staff a modificar
    //@param oldStaffName: nombre actual del staff a modificar
    await e13.escenario13(
        url,
        'chromium',
        'e13',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'staff/ghost',
        'ghost1',
        'Ghost'
    );

    //Escenario 4 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    //@param postTitle: titulo del post
    //@param textPost: texto del post
    await e4.escenario4(
        url,
        'chromium',
        'e4',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'posts',
        'Published Post',
        'Descripción de published post.'
    );

    // Escenario 8 que recibe por parametro:
    // @param url: constante global de url de pagina
    // @param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // @param scenarioTag: tag del escenario
    // @param correctEmail: un correo valido y existente para el login
    // @param correctPass: una contraseña valida y correcta para el login
    // @param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // @param navSubRoute: ruta a la que se quiere navegar en la prueba
    // @param pageTitle: titulo del page
    // @param pageDescription: texto del page
    await e8.escenario8(
        url,
        'chromium',
        'e8',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'pages',
        'Página para crear',
        'Descripción de página para crear'
    );


    //Escenario 17 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    //@param postTitle: titulo del post
    //@param textPost: texto del post,
    //@Param longPostTitle: titulo de mas de 255 caracteres
    await e17.escenario17(
        url,
        'chromium',
        'e17',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'pages',
        'Page Nueva Prueba',
        'texto de prueba de la pagina',
        'dadsfasdffffffffffffffffffffffffsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffferqewrqerqwreSADASdASDSDSFDASDFADSFADSFADSFABCDQa'
    );


    //Escenario 10 que recibe por parametro:
    //@param url: constante global de url de pagina
    //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    //@param scenarioTag: tag del escenario
    //@param correctEmail: un correo valido y existente para el login
    //@param correctPass: una contraseña valida y correcta para el login
    //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    //@param postTitle: titulo de la pagina
    //@param textPost: texto de la pagina
    await e10.escenario10(
        url,
        'chromium',
        'e10',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'pages',
        'Pagina Escenario 10',
        'texto de prueba de la pagina'
    );

    // Escenario 12 que recibe por parametro:
    // @param url: constante global de url de pagina
    // @param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // @param scenarioTag: tag del escenario
    // @param correctEmail: un correo valido y existente para el login
    // @param correctPass: una contraseña valida y correcta para el login
    // @param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // @param navSubRoute: ruta a la que se quiere navegar en la prueba
    // @param pageTitle: titulo del page
    // @param pageDescription: texto del page
    await e12.escenario12(
        url,
        'chromium',
        'e12',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'pages',
        'Página para cabecera',
        'Descripción de página para cabecera'
    );

    // Scene 16's params:
    // @param url: global url
    // @param browser: chromium firefox or webkit
    // @param scenarioTag: scene's tag
    // @param email: email of the admin
    // @param password: password of the admin
    // @param loggedUserName: full_name of the admin
    // @param postName: name of the post
    // @param tagName: name of the tag
    // @param tagStatus: public or private
    await e16.escenario16(
        url,
        'chromium',
        'e16',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'Post para etiquetar',
        'TagPrivado',
        'private'
    );

    // Scene 20's params:
    // @param url: global url
    // @param browser: chromium firefox or webkit
    // @param scenarioTag: scene's tag
    // @param email: email of the admin
    // @param password: password of the admin
    // @param loggedUserName: full_name of the admin
    // @param tagName: name of the tag
    // @param tagStatus: public or private
    await e20.escenario20(
        url,
        'chromium',
        'e20',
        'administrador123@example.com',
        'administrador123',
        'Ayrton Pastor C',
        'Tag para eliminar',
        'public'
    );
})(); //Llamado propio de la función