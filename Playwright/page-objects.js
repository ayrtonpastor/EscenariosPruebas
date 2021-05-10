const playwright = require('playwright');
const expect = require('expect');
let rutaPadre
let numeroCaptura = 0
exports.navegarUrl = async(page, url) => {
    page = page[0]
    rutaPadre = url
    await page.goto(url)
}

exports.realizarLogin = async(page, email, password) => {
    page = page[0]
    const emailInput = '#ember8'
    const passInput = '#ember10'
    await page.click(`css=${emailInput}`)
    await page.fill(`css=${emailInput}`, email)
    await page.click(`css=${passInput}`)
    await page.fill(`css=${passInput}`, password)
    await page.click(`css=${emailInput}`)
    await page.click(`css=${passInput}`)
}

exports.construirBrowser = async(browserType) => {
    numeroCaptura = 0;
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();

    return [await context.newPage(), browser];

}

exports.esperar = async(tiempo) => {
    return await new Promise(r => setTimeout(r, tiempo))
}

exports.clickBotonLogin = async(page) => {
    page = page[0]
    await page.click('#ember12')
}

exports.verificarErrorLogin = async(page) => {
    page = page[0]
    await this.esperar(1000)
    elem = await page.$('.main-error')
    expect(await elem.innerHTML()).not.toBe('&nbsp;')

}

exports.cerrarNavegador = async(page) => {
    const browser = page[1]
    await browser.close();
    return
}

exports.verificarLoginCorrecto = async(page, nombreUsuario) => {
    page = page[0]
    const elem = await page.waitForSelector(`span[title="${nombreUsuario}"]`)
    expect(await elem.innerText()).toBe(`${nombreUsuario}`)
}
exports.navegarA = async(page, ruta) => {
    page = page[0]
    await page.goto(rutaPadre + '#/' + ruta)
}

exports.cerrarSesion = async(page, nombreUsuario) => {
    page = page[0]
    const elem = await page.waitForSelector(`span[title="${nombreUsuario}"]`)
    await elem.click()
    const elem2 = await page.waitForSelector('a[href="#/signout/"]')
    await elem2.click()

}

exports.tomarCaptura = async(page, esc) => {
    numeroCaptura += 1
    await this.esperar(1000)
    page = page[0]
    await page.screenshot({ path: `./${esc}/${esc}-${numeroCaptura}.png` })
}

exports.clickNuevoPost = async(page) => {
    page = page[0];
    const button = await page.waitForSelector('a[href="#/editor/post/"]');
    await button.click();

}
exports.clickNuevoPage = async(page) => {
    page = page[0];
    const button = await page.waitForSelector('a[href="#/editor/page/"]');
    await button.click();

}
exports.escribirMockEnPost = async(page, title, texto) => {
    page = page[0]
    const inputTitle = await page.waitForSelector('.gh-editor-title')
    const inputText = await page.waitForSelector('p[data-koenig-dnd-droppable="true"]')
    await inputTitle.click()
    await inputTitle.fill(title)
    await inputText.fill(texto);
}

exports.guardarDraft = async(page, type_element) => {
    page = page[0];
    await page.click(`xpath=//*[@href='#/${type_element}']`);
}

exports.clickElementWithTile = async(page, title) => {
    page = page[0];
    await this.esperar(1000)
    await page.click(`xpath=//a/h3[text()='${title}'][1]`);
    await this.esperar(1000)
}

exports.deleteCurrentDraft = async(page) => {
    page = page[0];
    await page.click(`xpath=//button[@class='post-settings']`)
    await this.esperar(1000)
    await page.click(`xpath=//*[@class='settings-menu-container']//button[contains(@class,'settings-menu-delete-button')]`)
    await this.esperar(1000)
    await page.click(`xpath=(//*[@class='modal-footer']//button)[2]`)
}

exports.guardarDraft = async(page, type_element) => {
    page = page[0];
    await page.click(`xpath=//*[@href='#/${type_element}']`);
}

exports.changePostOwner = async(page, old_owner, new_owner) => {
    page = page[0];
    await page.click(`xpath=//button[@class='post-settings']`)
    await this.esperar(1000)
    await page.click(`xpath=//div[label[text()='Authors']]//div[@role='button']`)
    await this.esperar(1000)
    await page.click(`xpath=//ul[@role='listbox']//li[@role='option' and text()='${new_owner}']`)
    await this.esperar(1000)
    const pedroEl = await page.waitForSelector(`xpath=//*[@class='settings-menu-container']//li[text()='${old_owner}']`)
    const button = await pedroEl.waitForSelector(`xpath=//span[@role='button'][1]`)
    await button.click();
    await this.esperar(2000)
    await page.click(`xpath=//button[@class='close settings-menu-header-action']`)
    await this.esperar(1000)
}

exports.schedulePublishPost = async(page) => {
    page = page[0]
    await this.esperar(2000)
    await page.click(`xpath=//div/span[text()='Publish']`)
    await this.esperar(2000)
    await page.click(`xpath=//div[contains(@class,'gh-publishmenu-radio')]//div[text()='Schedule it for later']`)
    await this.esperar(2000)
    await page.click(`xpath=//button[contains(@class,'gh-publishmenu-button')]//span[text()='Schedule']`)
}

exports.enterImageContentToPost = async(page) => {
    page = page[0]
    await page.click(`xpath=//*[@data-placeholder='Begin writing your post...']`)
    await this.esperar(1000)
    await page.click(`xpath=//button[contains(@class,'koenig-plus-menu-button')]`)
    await this.esperar(1000)
    await page.click(`xpath=//div[@data-kg='cardmenu-card']//div[text()='HTML']`)
    await this.esperar(1000)
    await page.keyboard.insertText("<img src='https://ichef.bbci.co.uk/news/640/cpsprodpb/15A5F/production/_115017688_c6122844-332e-4516-a812-e56991e9374a.jpg'/>");    
}

exports.performActionOnElement = async(page, action, type_element) => {
    page = page[0];
    if(action != "Publish" && action != "Update" ){
        throw "Elemento no soportado, debe ser Page o Post";
    }
    if(type_element != "Post" && type_element != "Page"){
        throw "Elemento no soportado, debe ser Page o Post";
    }

    if(action == "Publish"){
        await page.keyboard.press('Enter');
    }
    await this.esperar(2000);
    await page.click(`xpath=//div/span[text()='${action}']`);
    await this.esperar(2000);
    await page.click(`//button[contains(@class,'gh-publishmenu-button')]//span[text()='${action}']`);


}

exports.publicarPost = async(page) => {
    page = page[0];
    const publishMenu = await page.waitForSelector('.gh-publishmenu')
    await publishMenu.click();
    const publishButton = await page.waitForSelector('.gh-publishmenu-button')
    await publishButton.click();
}

exports.verificarPostPublicado = async(page, tituloPost) => {
    page = page[0]
    const postTitle = await page.waitForSelector(`.gh-content-entry-title:text("${tituloPost}")`)
    const divPost = await postTitle.$('xpath=../..')
    const badgeStatus = await divPost.$('span.gh-content-status-published')
    expect(await badgeStatus.innerText()).toBe('PUBLISHED')
}

exports.eliminarPost = async(page, tituloPost) => {
    page = page[0]
    const postTitle = await page.waitForSelector(`.gh-content-entry-title:text("${tituloPost}")`)
    const divPost = await postTitle.$('xpath=../..')
    await divPost.click()
    const settingButton = await page.waitForSelector('button[title="Settings"]');
    await settingButton.click()
    const delButton = await page.waitForSelector('.settings-menu-delete-button')
    await delButton.click()
    await page.waitForSelector('section.modal-content')
    const modal = await page.$('section.modal-content')
    const confirmDelButt = await modal.$('.gh-btn-red')
    await confirmDelButt.click()
}

exports.verificarPostEliminado = async(page, tituloPost) => {
    page = page[0];
    const list = await page.waitForSelector('section.content-list')
    const postTitle = list.$(`.gh-content-entry-title:text("${tituloPost}")`)
    expect(await postTitle).toBe(null);
}