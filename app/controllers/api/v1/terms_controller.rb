class Api::V1::TermsController < ApplicationController

  def index
    term = Term.all
    render json: term
  end

  def new
    @term = Term.new
    @terms = Term.all
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
      word = "#{middle}#{first_consonants}#{ay}"
    end
    word.capitalize
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

  def create
    term = Term.new(term_params)
    term.translation = translate_sentence(term.phrase)
    term.save!
    if term
      render json: term
    else
      render json: term.errors
    end
  end

  def destroy
    puts "deleting"
    term = Term.find(params[:id])
    term.destroy
    render json: { id: "#{params[:id]}" }
  end

  private

  def term_params
    params.require(:term).permit(:phrase, :translation)
  end

end
