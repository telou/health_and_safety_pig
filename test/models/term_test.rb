require 'test_helper'

class TermTest < ActiveSupport::TestCase
  test "should not save term without a phrase" do
    term = Term.new
    assert_not term.save
  end

  test "should not save term with a phrase that is too short" do
    term = Term.new(phrase: "hat")
    assert_not term.save
  end

  test "should not save term with a phrase that is too long" do
    term = Term.new(phrase: "should not save term with a phrase that is too long")
    assert_not term.save
  end

  test "translation should be empty when term initializes" do
    term = Term.new(phrase: "risk assessment")
    term.save
    assert_not term.translation
  end
end
