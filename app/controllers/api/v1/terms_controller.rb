class Api::V1::TermsController < ApplicationController
  before_action :set_term, only: :destroy
  def index
    term = Term.order(:phrase)
    render json: term
  end

  def new
    @term = Term.new
    @terms = Term.all
    @translation = Translation.new
  end

  def create
    term = Term.create!(term_params)
    translation = Translation.new
    translation.term_id = term.id
    translation.translation = translate_sentence(term.phrase)
    translation.save
    if term && translation
      render json: term
    else
      render json: term.errors
    end
  end

  def destroy
    term&.destroy
    render json: { message: 'Deleted!' }
  end

  private

  def term
    term ||= Term.find(params[:id])
  end

  def term_params
    params.require(:term).permit(:phrase)
  end

  def vowel?(letter)
    vowel_array = ["a", "e", "i", "o", "u"]
    vowel_array.include? letter
  end

  def translate_word(word)
    yay = "yay"
    ay = "ay"
    if vowel?(word[0])
      return "#{word}#{yay}"
    else
      vowel_index = word.chars.index { |letter| vowel? letter }
      first_consonants = word[0...vowel_index]
      middle = word[vowel_index...word.length]
      "#{middle}#{first_consonants}#{ay}"
    end
  end

  def translate_sentence(sentence)
  final_sentence = []
  word_array = sentence.split(/\b/)
  word_array.each do |word|
    if word.length == 1 || word =~ /\W/
      final_sentence.push(word)
    else
      final_sentence.push(translate_word(word))
    end
  end
  return final_sentence.join
end

end
