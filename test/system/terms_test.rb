require "application_system_test_case"

class TermsTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit "/"

    assert_selector ".page-background"
    assert_selector "h1", text: "pigs"
    assert_selector "#phrase-input"
    assert_selector "#termPhrase"
    assert_selector ".phrase-output"

  end

  test "lets a user enter a term to be translated" do
    visit "/"

    fill_in "termPhrase", with: "Risk Assessment"

    click_on 'Translate'



  end
end
