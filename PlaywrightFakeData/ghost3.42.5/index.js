const e1 = require('./escenarios/escenario1')
const e2 = require('./escenarios/escenario2')
const e3 = require('./escenarios/escenario3');
const e4 = require('./escenarios/escenario4')
const e5 = require('./escenarios/escenario5')
const e6 = require('./escenarios/escenario6')
const e7 = require('./escenarios/escenario7');
const e8 = require('./escenarios/escenario8');
const e9 = require('./escenarios/escenario9');
const e10 = require('./escenarios/escenario10')
const e11 = require('./escenarios/escenario11');
const e12 = require('./escenarios/escenario12');
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

const p_mockaroo_data = require('../pseudoRandom/Mockaroo.json')
const aMockarooData = require('../pseudoRandom/Mockaroo1.json')
const jcMockarooData = require('../pseudoRandom/Mockaroo2.json')

const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};
//Función flecha asíncrona
(async() => {
    /* */
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
        'e2_5',
        administratorEmail,
        administratorPassword,
        administratorName,
        'staff',
        'ghost-author@example.com',
        faker.internet.password(),
    );
    await e2.escenario2(
        url,
        'chromium',
        'e2_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        'staff',
        'ghost-author@example.com',
        randomValue(jcMockarooData)['password']
    );

    var index=0
    const e3_apriori_data = require("../aprioriData/e3_data.json");
    for (let row of e3_apriori_data) {
        await e3.escenario3(
            url,
            'chromium',
            `e3_${index++}`,
            administratorEmail,
            administratorPassword,
            'posts',
            row["postTitle"]
        );
    }
    await e3.escenario3(
        url,
        'chromium',
        `e3_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        faker.lorem.sentence()
    );

    await e3.escenario3(
        url,
        'chromium',
        `e3_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        randomValue(p_mockaroo_data)['title']
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

    const e4AprioriData = require('../aprioriData/e4AprioriData.json');
    for (let i = 0; i < e4AprioriData.length; i++) {
        await e4.escenario4(
            url,
            'chromium',
            `e4-Apriori-${(i+1).toString()}`,
            administratorEmail,
            administratorPassword,
            administratorName,
            'posts',
            e4AprioriData[i]['post_name'],
            e4AprioriData[i]['post_description']
        );
    }
    await e4.escenario4(
        url,
        'chromium',
        `e4-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'posts',
        faker.phone.phoneNumber()+faker.phone.phoneNumber()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.lastName()+faker.internet.email(),
        faker.lorem.paragraph()
    );
    await e4.escenario4(
        url,
        'chromium',
        `e4-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'posts',
        randomValue(aMockarooData)['title'],
        randomValue(aMockarooData)['description']
    );

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
        'e6_5',
        administratorEmail,
        administratorPassword,
        administratorName,
        'posts',
        faker.lorem.sentence(),
        faker.lorem.paragraph()
    );
    await e6.escenario6(
        url,
        'chromium',
        'e6_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        'posts',
        randomValue(jcMockarooData)['tituloPost'],
        randomValue(jcMockarooData)['textoPost']
    );
    

    var index = 0
    const e7_apriori_data = require("../aprioriData/e7_data.json");
    for (let row of e7_apriori_data) {
        await e7.escenario7(
            url,
            'chromium',
            `e7_${index++}`,
            administratorEmail,
            administratorPassword,
            administratorName,
            'pages',
            row['pageTitle']
        );
    }
    await e7.escenario7(
        url,
        'chromium',
        `e7_${index++}`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        faker.lorem.sentence()
    );
    await e7.escenario7(
        url,
        'chromium',
        `e7_${index++}`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        randomValue(p_mockaroo_data)['title']
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

    const e8AprioriData = require('../aprioriData/e8AprioriData.json');
    for (let i = 0; i < e8AprioriData.length; i++) {
        await e8.escenario8(
            url,
            'chromium',
            `e8-Apriori-${(i+1).toString()}`,
            administratorEmail,
            administratorPassword,
            administratorName,
            'pages',
            e8AprioriData[i]['page_name'],
            e8AprioriData[i]['page_description']
        );
    }
    await e8.escenario8(
        url,
        'chromium',
        `e8-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        faker.phone.phoneNumber()+faker.phone.phoneNumber()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.lastName()+faker.internet.email(),
        faker.lorem.paragraph()
    );
    await e8.escenario8(
        url,
        'chromium',
        `e8-Pseudo-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        randomValue(aMockarooData)['title'],
        randomValue(aMockarooData)['description']
    );


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
        'e10_5',
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        faker.lorem.words(10),
        faker.lorem.paragraph(20)
    );
    await e10.escenario10(
        url,
        'chromium',
        'e10_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        randomValue(jcMockarooData)['tituloPagina'],
        randomValue(jcMockarooData)['textoPagina']
    );
    

    var index = 0
    const e11_apriori_data = require("../aprioriData/e11_data.json");
    for (let row of e11_apriori_data) {
        await e11.escenario11(
            url,
            'chromium',
            `e11_${index++}`,
            administratorEmail,
            administratorPassword,
            'posts',
            row['pageTitle'],
            administratorName,
            row['newOwner']
        );
    }
    await e11.escenario11(
        url,
        'chromium',
        `e11_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        faker.lorem.sentence(),
        administratorName,
        faker.name.firstName()
    );

    await e11.escenario11(
        url,
        'chromium',
        `e11_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        randomValue(p_mockaroo_data)['title'],
        administratorName,
        randomValue(p_mockaroo_data)['name']
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

    const e12AprioriData = require('../aprioriData/e12AprioriData.json');
    for (let i = 0; i < e12AprioriData.length; i++) {
        await e12.escenario12(
            url,
            'chromium',
            `e12-Apriori-${(i+1).toString()}`,
            administratorEmail,
            administratorPassword,
            administratorName,
            'pages',
            e12AprioriData[i]['page_name'],
            e12AprioriData[i]['page_description']
        );
    }
    await e12.escenario12(
        url,
        'chromium',
        `e12-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        faker.phone.phoneNumber()+faker.phone.phoneNumber()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.lastName()+faker.internet.email(),
        faker.lorem.paragraph()
    );
    await e12.escenario12(
        url,
        'chromium',
        `e12-Pseudo-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        'pages',
        randomValue(aMockarooData)['title'],
        randomValue(aMockarooData)['description']
    );


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
    for (let i = 0; i < e14_apriori_Data.length; i++) {
        let a = i+1;
        await e14.escenario14(
            url,
            'chromium',
            'e14_' + a,
            administratorEmail,
            administratorPassword,
            administratorName,
            'staff',
            e14_apriori_Data[i]['url']
        );
    }
    await e14.escenario14(
        url,
        'chromium',
        'e14_5',
        administratorEmail,
        administratorPassword,
        administratorName,
        'staff',
        faker.internet.url()
    );
    await e14.escenario14(
        url,
        'chromium',
        'e14_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        'staff',
        randomValue(jcMockarooData)['url'],
    );
    
    var index = 0
    const e15_apriori_data = require("../aprioriData/e15_data.json");
    for (let row of e15_apriori_data) {
        await e15.escenario15(
            url,
            'chromium',
            `e15_${index++}`,
            administratorEmail,
            administratorPassword,
            'posts',
            'Post Con Imagen',
            row['imgSrc']
        )
    }
    await e15.escenario15(
        url,
        'chromium',
        `e15_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        'Post Con Imagen',
        faker.image.imageUrl()
    )

    await e15.escenario15(
        url,
        'chromium',
        `e15_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        'Post Con Imagen',
        randomValue(p_mockaroo_data)['imgSrc']
    )
    

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

    const e16AprioriData = require('../aprioriData/e16AprioriData.json');
    for (let i = 0; i < e16AprioriData.length; i++) {
        await e16.escenario16(
            url,
            'chromium',
            `e16-Apriori-${(i+1).toString()}`,
            administratorEmail,
            administratorPassword,
            administratorName,
            e16AprioriData[i]['post_name'],
            e16AprioriData[i]['tag_name'],
            'private'
        );
    }
    await e16.escenario16(
        url,
        'chromium',
        `e16-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        faker.phone.phoneNumber()+faker.phone.phoneNumber()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.lastName()+faker.internet.email(),
        faker.phone.phoneNumber()+faker.phone.phoneNumber()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.lastName()+faker.internet.email(),
        'private'
    );
    await e16.escenario16(
        url,
        'chromium',
        `e16-Pseudo-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        randomValue(aMockarooData)['title'],
        randomValue(aMockarooData)['title'],
        'private'
    );


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
        'e18_5',
        administratorEmail,
        administratorPassword,
        administratorName,
        faker.lorem.text(),
        faker.lorem.paragraph(),
        faker.lorem.sentence(),
        'public'
    );
    await e18.escenario18(
        url,
        'chromium',
        'e18_6',
        administratorEmail,
        administratorPassword,
        administratorName,
        randomValue(jcMockarooData)['tituloPost'],
        randomValue(jcMockarooData)['textoPost'],
        randomValue(jcMockarooData)['tituloTag'],
        'public'
    );
    
    var index=0
    const e19_apriori_data = require("../aprioriData/e19_data.json");
    for (let row of e19_apriori_data) {
        await e19.escenario19(
            url,
            'chromium',
            `e19_${index++}`,
            administratorEmail,
            administratorPassword,
            'posts',
            'Post agendado',
            row['date']
        );
    }
    const e19_faker_date = faker.date.future(2)
    await e19.escenario19(
        url,
        'chromium',
        `e19_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        'Post agendado',
        `${e19_faker_date.getFullYear()}-${('0' + e19_faker_date.getMonth()).slice(-2)}-${('0' + e19_faker_date.getDay()).slice(-2)}`
    );

    await e19.escenario19(
        url,
        'chromium',
        `e19_${index++}`,
        administratorEmail,
        administratorPassword,
        'posts',
        'Post agendado',
        randomValue(p_mockaroo_data)['date']
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

    const e20AprioriData = require('../aprioriData/e20AprioriData.json');
    for (let i = 0; i < e20AprioriData.length; i++) {
        await e20.escenario20(
            url,
            'chromium',
            `e20-Apriori-${(i+1).toString()}`,
            administratorEmail,
            administratorPassword,
            administratorName,
            e20AprioriData[i]['tag_name'],
            'private'
        );
    }
    await e20.escenario20(
        url,
        'chromium',
        `e20-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        faker.phone.phoneNumber()+faker.phone.phoneNumber()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.firstName()+faker.name.lastName()+faker.internet.email(),
        'private'
    );
    await e20.escenario20(
        url,
        'chromium',
        `e20-Pseudo-Aleatorio-1`,
        administratorEmail,
        administratorPassword,
        administratorName,
        randomValue(aMockarooData)['title'],
        'private'
    );
})(); //Llamado propio de la función
