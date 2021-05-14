if ENV["ADB_DEVICE_ARG"].nil?
  
  $username = "administrador123@example.com"
  $password = "administrador123"
  $profile_name = "Ayrton Pastor C."

  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end

  Then(/^I login with credentials$/) do
    @driver.find_element(:xpath, "//*[@name='identification']").send_keys($username)
    sleep 1
    @driver.find_element(:xpath, "//*[@name='password']").send_keys($password)
    sleep 1
    @driver.find_element(:css, ".login").click
    sleep 2
  end

  
  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end
  
  
  Then(/^I click on list element with title "([^"]*)"$/) do |title|
    sleep 2
    @driver.find_element(:xpath, "//a/h3[text()='#{title}'][1]").click()
    sleep 2
  end

  Then(/^I delete current draft$/) do
    @driver.find_element(:xpath, "//button[@class='post-settings']").click()
    sleep 1
    @driver.find_element(:xpath, "//*[@class='settings-menu-container']//button[contains(@class,'settings-menu-delete-button')]").click()
    sleep 1
    @driver.find_element(:xpath, "(//*[@class='modal-footer']//button)[2]").click()
  end

  Then(/^I schedule publish post$/) do
    @driver.action.send_keys("\n").perform
    sleep 2
    @driver.find_element(:xpath, "//div/span[text()='Publish']").click()
    sleep 2
    @driver.find_element(:xpath, "//div[contains(@class,'gh-publishmenu-radio')]//div[text()='Schedule it for later']").click()
    sleep 2
    @driver.find_element(:xpath, "//button[contains(@class,'gh-publishmenu-button')]//span[text()='Schedule']").click()
  end

  Then(/^I "([^"]*)" current "([^"]*)"$/) do |action, type_element|
    if action != "Publish" and action !="Update"
      raise "Accion no soportada unicamente Publish y Update"
    end

    if type_element != "Post" and type_element != "Page"
      raise "Elemento no soportado, debe ser Page o Post"
    end

    if action == "Publish"
      @driver.action.send_keys("\n").perform
    end

    sleep 2
    @driver.find_element(:xpath, "//div/span[text()='#{action}']").click()
    sleep 2
    @driver.find_element(:xpath, "//button[contains(@class,'gh-publishmenu-button')]//span[text()='#{action}']").click()
  end

  Then(/^I enter image content to post$/) do
    @driver.find_element(:xpath, "//*[@data-placeholder='Begin writing your post...']").click()
    sleep 1
    @driver.find_element(:xpath, "//button[contains(@class,'koenig-plus-menu-button')]").click()
    sleep 1
    @driver.find_element(:xpath, "//div[@data-kg='cardmenu-card']//div[text()='HTML']").click()
    sleep 1
    @driver.action.send_keys("<img src='https://ichef.bbci.co.uk/news/640/cpsprodpb/15A5F/production/_115017688_c6122844-332e-4516-a812-e56991e9374a.jpg'/>").perform
  end

  Then(/^I navigate to menu "([^"]*)"$/) do |menu_item|
    @driver.find_element(:xpath, "//*[@href='#/#{menu_item}']").click()
  end

  Then(/^I save draft "([^"]*)"$/) do |type_element|
    @driver.find_element(:xpath, "//*[@href='#/#{type_element}']").click()
    @driver.find_element(:xpath, "//*[@href='#/#{type_element}']").click()
  end

  Then(/^I create new "([^"]*)"$/) do |type_element|
    @driver.find_element(:xpath, "//*[@href='#/editor/#{type_element}']").click()
  end

  Then(/^I change post owner from current to "([^"]*)"$/) do |new_owner|
    @driver.find_element(:xpath, "//button[@class='post-settings']").click()
    sleep 1
    @driver.find_element(:xpath, "//div[label[text()='Authors']]//div[@role='button']").click()
    sleep 1
    @driver.find_element(:xpath, "//ul[@role='listbox']//li[@role='option' and text()='#{new_owner}']").click()
    sleep 2
    @driver.find_element(:xpath, "//*[@class='settings-menu-container']//li[text()='#{$profile_name}']//span").click()
    sleep 1
    @driver.find_element(:xpath, "//button[@class='close settings-menu-header-action']").click()
    sleep 1
  end

  Then(/^I press the key "(.*?)"$/) do |key|
    @driver.action.send_keys(key.downcase.to_sym).perform
  end

  Then(/^I type this "(.*?)"$/) do |text|
    @driver.action.send_keys(text).perform
    puts(text)
  end

  Then(/^I save as published "(.*?)"$/) do |object_name|
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/header/section/div/div[1]/span").click
    sleep 2
    @driver.find_element(:xpath, "//html/body/div[1]/div/footer/button[2]").click
  end

  Then(/^I delete the current "(.*?)"$/) do |object_name|
    @driver.find_element(:css, "[href='#/#{object_name}s/']").click
    sleep 2
    # go to the filter
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/header/section/div/div[4]/div[1]/span").click
    sleep 2
    # filter by newest
    @driver.find_element(:xpath, "//html/body/div[1]/div/ul/li[1]").click
    sleep 2
    # click on the recently object created
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/section/ol/li[2]/a[2]").click
    sleep 2
    # click on the engine
    @driver.find_element(:xpath, "//button[@class='post-settings']").click
    sleep 1
    # click on the delete
    @driver.find_element(:xpath, "//*[@class='settings-menu-container']//button[contains(@class,'settings-menu-delete-button')]").click
    sleep 1
    # click to confirm the delete
    @driver.find_element(:xpath, "(//*[@class='modal-footer']//button)[2]").click
    sleep 1
  end

  Then(/^I assign the page "(.*?)" to the last navigation position$/) do |page_name|
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[1]/input").send_keys(page_name)
    sleep 2
    @driver.action.send_keys(:tab).perform
    @driver.action.send_keys(page_name.downcase.gsub(" ", "-")).perform
  end

  Then(/^I click on "(.*?)" button$/) do |title|
    @driver.find_element(:xpath, "//button/span[text()='#{title}'][1]").click
  end

  Then(/^I remove the assigment of the "(.*?)"$/) do |page_name|
    @driver.find_element(:css, "[href='#/settings/design/']").click
    sleep 2
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[5]/div/button").click
    sleep 2
  end

  Then(/^I config a "(.*?)" tag with the name "(.*?)" and a valid description$/) do |tag_status, tag_name|
    @driver.find_element(:id, "tag-name").send_keys((tag_status == 'private' ? '#' : '')+tag_name)
    sleep 2
    2.times { @driver.action.send_keys(:tab).perform }
    @driver.action.send_keys('Descripción de tag '+tag_name.downcase).perform
  end

  Then(/^I go to edit the "(.*?)" tag with the name "(.*?)"$/) do |tag_status, tag_name|
    filter_button = tag_status.to_s == 'private' ? '2' : '1'
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/header/section/div/button["+filter_button.to_s+"]").click
    sleep 2
    @driver.find_element(:css, "[href='#/tags/#{((tag_status == 'private' ? 'hash-' : '')+tag_name.downcase).gsub(" ","-")}/").click
    sleep 2
  end

  Then(/^I delete the current tag$/) do
    @driver.find_element(:xpath, "//button/span[text()='Delete tag'][1]").click
    sleep 2
    @driver.find_element(:xpath, "//button/span[text()='Delete'][1]").click
    sleep 2
  end

  Then(/^I tag the "(.*?)" with the recently created "(.*?)" tag, named "(.*?)"$/) do |object_to_tag, tag_status, tag_name|
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/header/section/button").click
    sleep 2
    @driver.find_element(:xpath, "//div[label[@for='tag-input']]//ul/input")
           .send_keys((tag_status == 'private' ? '#' : '')+tag_name.strip)
    sleep 2
    @driver.action.send_keys(:tab).perform
    @driver.find_element(:xpath, "//html/body/div[4]/div[1]/div/div/div/div/div[1]/div/div[1]/div[1]/button").click
  end

  Then(/^I filter by tags and I click on the tag "(.*?)", the recently created "(.*?)" tag$/) do |tag_name, tag_status|
    @driver.find_element(:xpath, "//html/body/div[2]/div/main/section/header/section/div/div[3]/div[1]").click
    sleep 2
    @driver.action.send_keys((tag_status == 'private' ? '#' : '')+tag_name.strip).perform
    sleep 2
    @driver.action.send_keys(:enter).perform
  end

  Then(/^I go to edit the post "(.*?)" on element having css selector "(.*?)"$/) do |post_name, selector|
    @driver.find_element(:css, selector).click
    sleep 2
    @driver.find_element(:xpath, "//a/h3[text()='#{post_name}'][1]").click
    sleep 2
  end

  Then("I should see error") do 
    error_element = @driver.find_element(:class_name,"main-error")
    puts(error_element.text)
    if (error_element.text.strip == "")
      raise "El valor mostrado del error es distinto al de por parametro"
    end
  end

  Then (/^I clear inputs with css selectors "(.*)" and "(.*)"$/)do |emailInput, passInput|
    @driver.find_element(:css,emailInput).clear()
    @driver.find_element(:css,passInput).clear()
    
  end

  
  Then (/^I verify is logged with the username: "(.*)"$/)do |username|
    userCard = @driver.find_element(:css,'span[title="'+username+'"]')
    if(userCard.text != username)
      raise "El nombre de usuario es incorrecto"
    end
  end

  Then(/^I logout from ghost of "(.*)"$/)do |username|
    @driver.find_element(:css,'span[title="'+username+'"]').click()
    sleep 1
    @driver.find_element(:css,'a[href="#/signout/"]').click()
  end
  
  Then(/^I verify the existance of post with title "(.*)"$/)do |postTitle|
    sleep 1
    postTitle=@driver.find_element(:xpath,'//h3[text()="'+postTitle+'"][1]')

    divPost = postTitle.find_element(:xpath,'../..')
    badgeStatus = divPost.find_element(:css,'span.gh-content-status-published')
    if(badgeStatus.text != "PUBLISHED")
      
        raise "El post no se encuentra en estado publicado"
      
    end

  end
  Then(/^I delete the new post with title: "(.*)"$/)do |postTitle|
    sleep 1
    postTitle=@driver.find_element(:xpath,'//h3[text()="'+postTitle+'"][1]')

    postTitle.find_element(:xpath,'../..').click()
    sleep 1
    @driver.find_element(:css, 'button[title="Settings"]').click()
    sleep 1
    @driver.find_element(:css,'.settings-menu-delete-button').click()
    sleep 1
    modal = @driver.find_element(:css,'section.modal-content')
    modal.find_element(:css,'.gh-btn-red').click()
  end

  Then(/^I open "(.*)" staff match info$/) do |nameStaff|
    File.write('oldNameStaff',nameStaff)
    variable = @driver.find_element(:xpath,'//h3[text()="'+nameStaff+'"]')
    variable.find_element(:xpath,'../..').click()
  end

  Then (/^I clear input with css selector "(.*)"$/)do |nameInput|
    @driver.find_element(:css,nameInput).clear()
  end

  Then (/^I verify changed name "(.*)"$/)do |nameStaff|
    @driver.find_element(:xpath,'//h3[text()="'+nameStaff+'"]')
  end

  Then(/^I put old name back in the input who contains "(.*)" with css "(.*)"$/)do |newName, selector|
    oldName = IO.read('oldNameStaff')
    staffName=@driver.find_element(:xpath,'//h3[text()="'+newName+'"][1]')
    staffName.find_element(:xpath,'../..').click()
    @driver.find_element(:css,selector)
    inputName = @driver.find_element(:css,selector)
    inputName.clear()
    inputName.send_keys(oldName)
  end
  
  Then(/^I open "(.*)" page match info$/) do |namePage|
    variable = @driver.find_element(:xpath,'//h3[text()="'+namePage+'"]')
    variable.find_element(:xpath,'../..').click()
  end

  Then(/^I enter a text with "(.*)" chars into input field having css selector "(.*)"$/) do |numberChar,selector|
    inputTitle = @driver.find_element(:css,selector)
    inputTitle.clear()
    mockText = ""
    for i in 0..numberChar.to_i
      mockText = mockText+"x"
    end
    inputTitle.send_keys(mockText)
  end

  Then(/^I go to config user "(.*)"$/)do |title|
    sleep 1
    postTitle=@driver.find_element(:xpath,'//h3[text()="'+title+'"][1]')
    postTitle.find_element(:xpath,'../..').click()

  end

  Then(/^I close popup$/)do
    sleep 1
    @driver.find_element(:xpath, "//button[@class='gh-notification-close']").click()
    sleep 1

  end

  Then(/^I close session$/) do
    sleep 1
    @driver.find_element(:xpath, "//span[@class='gh-user-email']").click()
    sleep 2
    @driver.find_element(:css, "[href='#/signout/']").click()
  end

  Then(/^I verify the existance of post scheduled with title "(.*)"$/)do |postTitle|
    sleep 1
    postTitle=@driver.find_element(:xpath,'//h3[text()="'+postTitle+'"][1]')
    divPost = postTitle.find_element(:xpath,'../..')
    badgeStatus = divPost.find_element(:css,'span.gh-content-status-draft')
    if(badgeStatus.text != "SCHEDULED")
      raise "El post no se encuentra en estado publicado"    
    end
  end

  Then(/^I change rol for Ghost user$/) do

    sleep 1
    @driver.find_element(:xpath, "//span[@class='gh-select']").click()
    sleep 2
    @driver.action.send_keys("Up".downcase.to_sym).perform
    @driver.action.send_keys("Up".downcase.to_sym).perform
    @driver.action.send_keys("Up".downcase.to_sym).perform
    @driver.action.send_keys("Down".downcase.to_sym).perform
    @driver.action.send_keys("Enter".downcase.to_sym).perform
  end

end
