require 'spec_helper'

describe Term do
  context "When testing the Term class" do

    # it "should have a valid phrase" do
    #   term = Term.new(phrase: phrase_example)
    #   expect(term).to have_attributes(phrase: phrase_example)
    # end

    # it "should not accept a phrase less than 5 characters" do
    #   term = Term.new(phrase: "Hat")
    #   expect(term).not_to be_valid
    # end

    # it "should not accept a phrase more than 50 characters" do
    #   term = Term.new(phrase: "This phrase is much much much much much much too long")
    #   expect(term).not_to be_valid
    # end

    # it "should have translation equal to nil on initialisation" do
    #   term = Term.new(phrase: phrase_example)
    #   expect(term.translation).to be_nil
    # end

    # it "should translate the phrase and save it to the term" do
    #   term = Term.create(phrase: phrase_example)
    #   term.translation = term.translate(term.phrase)
    #   term.save
    #   expect(term.translation).not_to be_nil
    # end

    it "should correctly translate the phrase" do
      term = Term.create(phrase: "Risk Assessment")
      expect(term.translation).to eq "Iskray Assessmentyay"
    end

  end
end
