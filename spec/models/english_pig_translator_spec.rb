require 'spec_helper'

describe Term do
  context "When testing the Term class" do

    it "should add 'yay' to words starting with a vowel" do
      term = "Assessment"
      translation = EnglishPigTranslator.new.translate(term)
      expect(translation).to eq "Assessmentyay"
    end

    it "should add ay plus consonants to words starting with consonants" do
      term = "Risk"
      translation = EnglishPigTranslator.new.translate(term)
      expect(translation).to eq "Iskray"
    end

    #doesnt translate single characters in a string
    #doesnt translate non word input
    #doesnt translate emptry string
    #doesnt translate if the input is nil


    it "should return a translated phrase with both words capitalised" do
      term = "Risk Assessment"
      translation = EnglishPigTranslator.new.translate(term)
      translations = translation.split(" ")
      translations.each do |word|
        expect(word[0]).to eq word[0].upcase
      end
    end
  end
end
