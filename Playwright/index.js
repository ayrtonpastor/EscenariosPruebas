const e1 = require('./escenario1')
const e5 = require('./escenario5')


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

})(); //Llamado propio de la función