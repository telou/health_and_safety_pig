class TermsController < ApplicationController
  before_action :set_term, only: :destroy
  def index
    @terms = Term.order(:word)
  end

  def new
    @term = Term.new
    @terms = Term.all
    @translation = Translation.new
  end

  def create
    @term = Term.new(term_params)
    @term.save
    @translation = Translation.new
    @translation.term_id = @term.id
    @translation.translation = translate_word(@term.word)
    @translation.save
    redirect_to terms_path
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    @term.destroy
    redirect_to terms_path
  end

  private

  def set_term
    @term = Term.find(params[:id])
  end

  def term_params
    params.require(:term).permit(:word)
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

end
