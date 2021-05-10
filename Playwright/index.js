const e1 = require('./escenario1')
const e5 = require('./escenario5')
const e9 = require('./escenario9')
const e13 = require('./escenario13')
const e17 = require('./escenario17')

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
            'b@uniandes.edu.co',
            '$0987654321.',
            'Juan Carlos',
            'staff'
        )
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
        'b@uniandes.edu.co',
        '$0987654321.',
        'Juan Carlos',
        'posts',
        'Post Nuevo Prueba',
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
        'b@uniandes.edu.co',
        '$0987654321.',
        'Juan Carlos',
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
        'b@uniandes.edu.co',
        '$0987654321.',
        'Juan Carlos',
        'staff/ghost',
        'ghost1',
        'Ghost'
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
        'b@uniandes.edu.co',
        '$0987654321.',
        'Juan Carlos',
        'pages',
        'Page Nueva Prueba',
        'texto de prueba de la pagina',
        'dadsfasdffffffffffffffffffffffffsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffferqewrqerqwreSADASdASDSDSFDASDFADSFADSFADSFABCDQa'
    );


})(); //Llamado propio de la función