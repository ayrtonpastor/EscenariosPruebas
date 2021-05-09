if ENV["ADB_DEVICE_ARG"].nil?
  
  $url_id = nil

  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
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


end
