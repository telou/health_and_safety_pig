require 'rails_helper'

feature 'homepage', js: true do

  background do
    visit ('http://localhost:3000/')
  end

  scenario 'Current page is root directory' do
    expect(page).to have_current_path('/')
  end

end
