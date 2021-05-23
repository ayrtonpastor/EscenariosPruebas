const playwright = require('playwright');
const expect = require('expect');
let rutaPadre
let numeroCaptura = 0
let oldNameStaff
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
    await context.setDefaultTimeout(3500)
    await context.setDefaultNavigationTimeout(3500)

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
    await this.esperar(2000)
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
    await page.reload()
    const elem = await page.waitForSelector(`span[title="${nombreUsuario}"]`)
    await elem.click()
    const elem2 = await page.waitForSelector('a[href="#/signout/"]')
    await elem2.click()
}

exports.tomarCaptura = async(page, esc) => {
    numeroCaptura += 1
    await this.esperar(1000)
    page = page[0]
    await page.screenshot({ path: `./screenshots/${esc}/${esc}-${numeroCaptura}.png` })
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
    await page.keyboard.press('Backspace')
    await page.keyboard.type(new_owner)
    await page.keyboard.press('Enter')
    await this.esperar(1000)
}

exports.changePostOwnerClose = async(page, old_owner, new_owner) => {
    page = page[0];
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

exports.enterImageContentToPost = async(page, url) => {
    page = page[0]
    await page.click(`xpath=//*[@data-placeholder='Begin writing your post...']`)
    await this.esperar(1000)
    await page.click(`xpath=//button[contains(@class,'koenig-plus-menu-button')]`)
    await this.esperar(1000)
    await page.click(`xpath=//div[@data-kg='cardmenu-card']//div[text()='HTML']`)
    await this.esperar(1000)
    await page.keyboard.insertText(`<img src='${url}'/>`);
}

exports.performActionOnElement = async(page, action, type_element) => {
    page = page[0];
    if (action != "Publish" && action != "Update") {
        throw "Elemento no soportado, debe ser Page o Post";
    }
    if (type_element != "Post" && type_element != "Page") {
        throw "Elemento no soportado, debe ser Page o Post";
    }

    if (action == "Publish") {
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
    const postTitle = await page.waitForSelector(`.gh-content-entry-title:text("${tituloPost.trim() === '' ? '(Untitled)' : tituloPost}")`)
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

exports.modificarStaff = async(page, nombre) => {
    page = page[0];
    const nameInput = await page.waitForSelector('input[placeholder="Full Name"]')
    oldNameStaff = await nameInput.innerText()
    await nameInput.fill(nombre)
    const saveButt = await page.waitForSelector('button.gh-btn-blue')
    await saveButt.click()
}

exports.verificarStaffModificado = async(page, nombre) => {
    page = page[0];
    await page.click('a[href="#/staff/"]')
    const staffCards = await page.waitForSelector('div.apps-grid')
    const staffName = await staffCards.$(`h3:text("${nombre}")`)
    expect(await staffName.innerText()).not.toEqual(await oldNameStaff)
}

exports.navegaraPostExistente = async(page, tituloPost) => {
    page = page[0]
    const postTitle = await page.waitForSelector(`.gh-content-entry-title:text("${tituloPost}")`)
    const divPost = await postTitle.$('xpath=../..')
    await divPost.click()
}


exports.verificarModalErrorLongTitle = async(page) => {
    page = page[0]
    const header = await page.waitForSelector('h1:text("Are you sure you want to leave this page?")')
    const modal = await header.$('xpath=../..')
    const leaveButton = await modal.$('.gh-btn-red')
    await leaveButton.click()
}
exports.asignarPageANavBar = async(page, pageTitle) => {
    page = page[0];
    await page.type(`xpath=/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[1]/input`, `${pageTitle.trim() === '' ? '(Untitle)' : pageTitle}`);
    await page.keyboard.press('Tab');
    await page.keyboard.type(`${pageTitle.trim() === '' ? '(Untitle)' : pageTitle.replace(/ /g, "-").toLowerCase().trim()}`);
}

exports.clicEn = async(page, textElement) => {
    page = page[0];
    await page.$eval(`"${textElement}"`, (element) => {
        element.scrollIntoView();
    });
    await page.click(`"${textElement}"`);
}

exports.desasignarPageANavBar = async(page) => {
    page = page[0];
    await page.reload()
    await page.click(`xpath=//html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[5]/div/button`);
}

exports.completarParametrosDeTag = async(page, tagName, tagStatus) => {
    page = page[0];
    await page.type(`input[id="tag-name"]`, `${tagStatus === 'private' ? '#' : ''}${tagName.toLowerCase().trim()}`);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type(`Descripción de tag ${tagName.toLowerCase().trim()}`);
}

exports.filtrarYEditarTag = async(page, tagName, tagStatus) => {
    page = page[0];
    await page.reload();
    if (tagStatus === 'private') {
        await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/button[2]`);
    } else {
        await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/button[1]`);
    }
    // await page.click(`a[href="#/tags/${(tagStatus === 'private' ? 'hash-' : '')+tagName.replace(/ /g, "-").toLowerCase().trim()}/"]`);
    await page.click(`xpath=//a/h3[text()='${(tagStatus === 'private' ? '#' : '')+tagName.toLowerCase().trim()}'][1]`);
}

exports.eliminarTag = async(page) => {
    page = page[0];
    await page.reload();
    await page.click(`xpath=//html/body/div[2]/div/main/section/button`);
    await page.click(`xpath=(//*[@class='modal-footer']//button)[2]`);
}

exports.validarEliminacionDeTag = async(page, tagName, tagStatus) => {
    page = page[0];
    await page.reload();
    if (tagStatus === 'private') {
        await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/button[2]`);
    } else {
        await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/button[1]`);
    }
}

exports.asignarEtiquetaAPost = async(page, postName, tagName, tagStatus) => {
    page = page[0];
    await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/button`);
    await page.type(`xpath=//div[label[@for='tag-input']]//ul/input`,
        `${tagStatus === 'private' ? '#' : ''}${tagName.trim()}`);
    await page.keyboard.press('Tab');
    await page.click(`xpath=//html/body/div[4]/div[1]/div/div/div/div/div[1]/div/div[1]/div[1]/button`);
    await this.esperar(1500)
}

exports.filtrarPostsPorTag = async(page, tagName, tagStatus) => {
    page = page[0];
    await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/div[3]/div[1]`);
    await page.click(`.ember-power-select-option:text("${tagStatus === 'private' ? '#' : ''}${tagName.trim()}")`);
}

exports.validarEtiquetaAPost = async(page, postName) => {
    page = page[0];

    const length = await page.$$eval(`text="${postName.trim()}"`, (items) => items.length);
    expect(length).toBe(1)
}

exports.verificarLoginUsuarioCorrecto = async(page, usuario) => {
    page = page[0]
    const elem = await page.waitForSelector('span.gh-user-name')
    expect(await elem.innerHTML()).toBe(usuario)
}
exports.realizarCambioPassword = async(page, newPass, password) => {
    page = page[0]
    const passNewInput = 'input[id=user-password-new]'
    const passNewValidInput = 'input[id=user-new-password-verification]'

    await page.click(`css=${passNewInput}`)
    await page.fill(`css=${passNewInput}`, newPass)
    await page.click(`css=${passNewValidInput}`)
    await page.fill(`css=${passNewValidInput}`, newPass)
    await page.click(`css=${passNewInput}`)
    await page.click(`css=${passNewValidInput}`)
    await page.click('button.button-change-password')
    await this.esperar(1000)
    await page.click('button.gh-notification-close')
}
exports.publicarPostHora = async(page) => {
    page = page[0];
    const publishMenu = await page.waitForSelector('.gh-publishmenu')
    await publishMenu.click();
    const timeButton = await page.waitForSelector('.gh-date-time-picker-date')
    await timeButton.click();
    const timeNextButton = await page.waitForSelector('.ember-power-calendar-nav-control--next')
    await timeNextButton.click();
    const frameButton = await page.waitForSelector('.ember-power-calendar-nav-title')
    await frameButton.click();

    await timeButton.click();
    const publishButton = await page.waitForSelector('.gh-publishmenu-button')
    await publishButton.click();
}
exports.verificarPostProgramado = async(page, tituloPost) => {
    page = page[0]
    const postTitle = await page.waitForSelector(`.gh-content-entry-title:text("${tituloPost}")`)
    const divPost = await postTitle.$('xpath=../..')
    const badgeStatus = await divPost.$('span.gh-content-status-draft')
    expect(await badgeStatus.innerText()).toBe('SCHEDULED')
}
exports.realizarCambioRol = async(page, newRol) => {
    page = page[0]
    const rolNewInput = await page.waitForSelector('span.gh-select')
    await rolNewInput.click()
    await this.esperar(1000)
    const newSelectRol = await rolNewInput.$(`option:text("${newRol}")`);
    await this.esperar(1000)
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    const saveButt = await page.waitForSelector('button.gh-btn-blue')
    await saveButt.click()
    await this.esperar(1000)
}
exports.verificarRolCorrecto = async(page, rol, user) => {
    page = page[0]
    await this.esperar(1000)
    const postTitle = await page.waitForSelector(`.apps-card-app-title:text("${user}")`)
    const divPost = await postTitle.$('xpath=../../..')
    const badgeStatus = await divPost.$('span.gh-badge')
    expect(await badgeStatus.innerText()).toBe(`${rol}`)
}

exports.eliminarUltimoPostOPage = async(page) => {
    page = page[0]
    await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/div[4]/div[1]`);
    await page.click(`xpath=//html/body/div[1]/div/ul/li[1]`);
    await page.click(`xpath=//html/body/div[2]/div/main/section/section/ol/li[2]/a[1]`);
    const settingButton = await page.waitForSelector('button[title="Settings"]');
    await settingButton.click()
    const delButton = await page.waitForSelector('.settings-menu-delete-button')
    await delButton.click()
    await page.waitForSelector('section.modal-content')
    const modal = await page.$('section.modal-content')
    const confirmDelButt = await modal.$('.gh-btn-red')
    await confirmDelButt.click()
}

exports.eliminarUltimoTag = async(page, tagStatus, tagName) => {
    page = page[0];
    await page.reload();
    if (tagStatus === 'private') {
        await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/button[2]`);
    } else {
        await page.click(`xpath=//html/body/div[2]/div/main/section/header/section/div/button[1]`);
    }
    await this.esperar(1000)
    await page.click(`xpath=//a/h3[text()='${(tagStatus === 'private' ? '#' : '')+tagName.toLowerCase().trim()}'][1]`);
    await this.esperar(1000)
    await page.click(`xpath=//html/body/div[2]/div/main/section/button`);
    await page.click(`xpath=(//*[@class='modal-footer']//button)[2]`);
}