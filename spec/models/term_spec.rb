require 'spec_helper'

describe Term do
  context "When testing the Term class" do

    it "should have a valid phrase" do
      term = Term.new(phrase: "Risk Assessment")
      expect(term).to have_attributes(phrase: "Risk Assessment")
    end

    it "should not accept a phrase less than 5 characters" do
      term = Term.new(phrase: "Hat")
      expect(term).not_to be_valid
    end

    it "should not accept a phrase more than 50 characters" do
      term = Term.new(phrase: "This phrase is much much much much much much too long")
      expect(term).not_to be_valid
    end

    it "should have translation equal to nil on initialisation" do
      term = Term.new(phrase: "Risk Assessment")
      expect(term.translation).to be_nil
    end

  end
end
