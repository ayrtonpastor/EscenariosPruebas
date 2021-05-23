const e1 = require('./escenarios/escenario1')
const e2 = require('./escenarios/escenario2')
const e3 = require('./escenarios/escenario3');
const e4 = require('./escenarios/escenario4')
const e5 = require('./escenarios/escenario5')
const e6 = require('./escenarios/escenario6')
const e7 = require('./escenarios/escenario7');
const e8 = require('./escenarios/escenario8')

const e9 = require('./escenarios/escenario9')
const e10 = require('./escenarios/escenario10')
const e11 = require('./escenarios/escenario11');
const e12 = require('./escenarios/escenario12')
const e13 = require('./escenarios/escenario13');
const e14 = require('./escenarios/escenario14');
const e15 = require('./escenarios/escenario15');
const e16 = require('./escenarios/escenario16')
const e17 = require('./escenarios/escenario17');
const e18 = require('./escenarios/escenario18')
const e19 = require('./escenarios/escenario19');
const e20 = require('./escenarios/escenario20');
const e1_apriori_Data = require('../aprioriData/MOCK_DATA.json');
const url = 'http://localhost:2368/ghost/';
const administratorName = 'Ayrton Pastor C.';
const administratorEmail = 'administrador123@example.com';
const administratorPassword = 'administrador123';
const faker = require('faker');


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

    for (let i = 0; i < e1_apriori_Data.length; i++) {
        await e1.escenario1(
            url,
            'chromium',
            'e1',
            e1_apriori_Data[i]['correo'],
            e1_apriori_Data[i]['contrasena'],
            administratorEmail,
            administratorPassword,
            administratorName,
            'staff'
        );
    }



    // //Escenario 2 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post

    const e2_apriori_Data = require('../aprioriData/e2_data.json');
    for (let i = 0; i < e2_apriori_Data.length; i++) {
        let a = i+1;
        await e2.escenario2(
            url,
            'chromium',
            'e2_' + a,
            administratorEmail,
            administratorPassword,
            administratorName,
            'staff',
            e2_apriori_Data[i]['correo'],
            e2_apriori_Data[i]['contrasena']           
        );
    }
    await e2.escenario2(
        url,
        'chromium',
        'e2_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        'staff',
        'ghost-author@example.com',
        faker.internet.password(),
    ); 
    // await e3.escenario3(
    //     url,
    //     'chromium',
    //     'e3',
    //     administratorEmail,
    //     administratorPassword,
    //     'posts',
    //     "Nuevo Post"
    // );


    // //Escenario 4 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post
    // await e4.escenario4(
    //     url,
    //     'chromium',
    //     'e4',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'posts',
    //     'Published Post',
    //     'Descripción de published post.'
    // );

    // //Escenario 5 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post
    // await e5.escenario5(
    //     url,
    //     'chromium',
    //     'e5',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'posts',
    //     'Post Nuevo Prueba',
    //     'texto de prueba del post'
    // );

    // //Escenario 6 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post

    // //Escenario 6 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post
    const e6_apriori_Data = require('../aprioriData/e6_data.json');
    for (let i = 0; i < e6_apriori_Data.length; i++) {
        let a = i+1;
        await e6.escenario6(
            url,
            'chromium',
            'e6_'+ a,
            administratorEmail,
            administratorPassword,
            administratorName,
            'posts',
            e6_apriori_Data[i]['tituloPost'],
            e6_apriori_Data[i]['textoPost']
        );
    }
    await e6.escenario6(
        url,
        'chromium',
        'e6_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        'posts',
        faker.lorem.sentence(),
        faker.lorem.paragraph()
    );
    // await e7.escenario7(
    //     url,
    //     'chromium',
    //     'e7',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'pages',
    //     "Nueva Pagina"
    // );

    // // Escenario 8 que recibe por parametro:
    // // @param url: constante global de url de pagina
    // // @param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // // @param scenarioTag: tag del escenario
    // // @param correctEmail: un correo valido y existente para el login
    // // @param correctPass: una contraseña valida y correcta para el login
    // // @param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // // @param navSubRoute: ruta a la que se quiere navegar en la prueba
    // // @param pageTitle: titulo del page
    // // @param pageDescription: texto del page
    // await e8.escenario8(
    //     url,
    //     'chromium',
    //     'e8',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'pages',
    //     'Página para crear',
    //     'Descripción de página para crear'
    // );

    // //Escenario 9 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post
    // await e9.escenario9(
    //     url,
    //     'chromium',
    //     'e9',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'pages',
    //     'Page Nueva Prueba',
    //     'texto de prueba de la pagina'
    // );

    // //Escenario 10 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo de la pagina
    // //@param textPost: texto de la pagina
    const e10_apriori_Data = require('../aprioriData/e10_data.json');
    for (let i = 0; i < e10_apriori_Data.length; i++) {
        let a = i+1;
        await e10.escenario10(
            url,
            'chromium',
            'e10_'+ a,
            administratorEmail,
            administratorPassword,
            administratorName,
            'pages',
            e10_apriori_Data[i]['tituloPagina'],
            e10_apriori_Data[i]['textoPagina']
        );
    }
    await e10.escenario10(
        url,
        'chromium',
        'e10_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        faker.lorem.words(10),
        faker.lorem.paragraph(20)
    );
    // await e11.escenario11(
    //     url,
    //     'chromium',
    //     'e11',
    //     administratorEmail,
    //     administratorPassword,
    //     'posts',
    //     'Post Nuevo',
    //     administratorName,
    //     'Ghost'
    // );

    // // Escenario 12 que recibe por parametro:
    // // @param url: constante global de url de pagina
    // // @param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // // @param scenarioTag: tag del escenario
    // // @param correctEmail: un correo valido y existente para el login
    // // @param correctPass: una contraseña valida y correcta para el login
    // // @param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // // @param navSubRoute: ruta a la que se quiere navegar en la prueba
    // // @param pageTitle: titulo del page
    // // @param pageDescription: texto del page
    // await e12.escenario12(
    //     url,
    //     'chromium',
    //     'e12',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'pages',
    //     'Página para cabecera',
    //     'Descripción de página para cabecera'
    // );

    // //Escenario 13 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param newStaffName: nuevo nombre del staff a modificar
    // //@param oldStaffName: nombre actual del staff a modificar
    // await e13.escenario13(
    //     url,
    //     'chromium',
    //     'e13',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'staff/ghost',
    //     'ghost1',
    //     'Ghost'
    // );
    // //Escenario 14 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param newRol: nombre del nuevo rol a cambiar
    const e14_apriori_Data = require('../aprioriData/e14_data.json');
    // for (let i = 0; i < e14_apriori_Data.length; i++) {
    //     let a = i+1;
    //     await e14.escenario14(
    //         url,
    //         'chromium',
    //         'e14_' + a,
    //         administratorEmail,
    //         administratorPassword,
    //         administratorName,
    //         'staff',
    //         'EDITOR'
    //     );
    // }
    // await e15.escenario15(
    //     url,
    //     'chromium',
    //     'e15',
    //     administratorEmail,
    //     administratorPassword,
    //     'posts',
    //     'Post Con Imagen'
    // )

    // // Scene 16's params:
    // // @param url: global url
    // // @param browser: chromium firefox or webkit
    // // @param scenarioTag: scene's tag
    // // @param email: email of the admin
    // // @param password: password of the admin
    // // @param loggedUserName: full_name of the admin
    // // @param postName: name of the post
    // // @param tagName: name of the tag
    // // @param tagStatus: public or private
    // await e16.escenario16(
    //     url,
    //     'chromium',
    //     'e16',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'Post para etiquetar',
    //     'TagPrivado',
    //     'private'
    // );

    // //Escenario 17 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param navSubRoute: ruta a la que se quiere navegar en la prueba
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post,
    // //@Param longPostTitle: titulo de mas de 255 caracteres
    // await e17.escenario17(
    //     url,
    //     'chromium',
    //     'e17',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'pages',
    //     'Page Nueva Prueba',
    //     'texto de prueba de la pagina',
    //     'dadsfasdffffffffffffffffffffffffsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffferqewrqerqwreSADASdASDSDSFDASDFADSFADSFADSFABCDQa'
    // );

    // //Escenario 18 que recibe por parametro:
    // //@param url: constante global de url de pagina
    // //@param browser: el tipo de browser en el cual se hara la prueba "chromium, firefox o webkit"
    // //@param scenarioTag: tag del escenario
    // //@param correctEmail: un correo valido y existente para el login
    // //@param correctPass: una contraseña valida y correcta para el login
    // //@param loggedUserName: nombre del usuario registrado relacionado al correo valido y existente
    // //@param postTitle: titulo del post
    // //@param textPost: texto del post
    // //@param tagName: nombre del tag a crear
    // //@param tagStatus: tipo de tag a crear
    const e18_apriori_Data = require('../aprioriData/e18_data.json');
    for (let i = 0; i < e18_apriori_Data.length; i++) {
        let a = i+1;
        await e18.escenario18(
            url,
            'chromium',
            'e18_' + a,
            administratorEmail,
            administratorPassword,
            administratorName,
            e18_apriori_Data[i]['tituloPost'],
            e18_apriori_Data[i]['textoPost'],
            e18_apriori_Data[i]['tituloTag'],
            'public'
        );
    }
    await e18.escenario18(
        url,
        'chromium',
        'e18_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        faker.lorem.text(),
        faker.lorem.paragraph(),
        faker.lorem.sentence(),
        'public'
    );
    // await e19.escenario19(
    //     url,
    //     'chromium',
    //     'e19',
    //     administratorEmail,
    //     administratorPassword,
    //     'posts',
    //     'Post agendado'
    // );

    // // Scene 20's params:
    // // @param url: global url
    // // @param browser: chromium firefox or webkit
    // // @param scenarioTag: scene's tag
    // // @param email: email of the admin
    // // @param password: password of the admin
    // // @param loggedUserName: full_name of the admin
    // // @param tagName: name of the tag
    // // @param tagStatus: public or private
    // await e20.escenario20(
    //     url,
    //     'chromium',
    //     'e20',
    //     administratorEmail,
    //     administratorPassword,
    //     administratorName,
    //     'Tag para eliminar',
    //     'public'
    // );
})(); //Llamado propio de la función