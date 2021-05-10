const e1 = require('./escenario1');
const e3 = require('./escenario3');
const e5 = require('./escenario5');
const e7 = require('./escenario7');
const e9 = require('./escenario9');
const e11 = require('./escenario11');
const e15 = require('./escenario15');
const e19 = require('./escenario19');


const url = 'http://localhost:2368/ghost/';

const username = 'administrador123@example.com';
const password = 'administrador123';
const profile_name = 'Pedro';

//Función flecha asíncrona
(async() => {
    /*
    */
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
            username,
            password,
            profile_name,
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
        username,
        password,
        profile_name,
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
        username,
        password,
        profile_name,
        'pages',
        'Page Nueva Prueba',
        'texto de prueba de la pagina'
    );
    
   await e3.escenario3
   (
       url,
       'chromium',
       'e3',
       username,
       password,
       'posts',
       "Nuevo Post"
   )
    
   await e7.escenario7
   (
       url,
       'chromium',
       'e7',
       username,
       password,
       'pages',
       "Nueva Pagina"   
   )
   
  await e11.escenario11
  (
    url,
    'chromium',
    'e11',
    username,
    password,
    'posts',
    'Post Nuevo',
    profile_name,
    'Ghost'
  )
  
    await e15.escenario15
    (
        url,
        'chromium',
        'e15',
        username,
        password,
        'posts',
        'Post Con Imagen'
    )

    await e19.escenario19
    (
        url,
        'chromium',
        'e19',
        username,
        password,
        'posts',
        'Post agendado'
    )

})(); //Llamado propio de la función