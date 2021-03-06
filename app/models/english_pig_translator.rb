class EnglishPigTranslator
  def vowel?(letter)
    vowel_array = ["a", "e", "i", "o", "u"]
    vowel_array.include? letter.downcase
  end

  def translate_word(word)
    yay = "yay"
    ay = "ay"
    if vowel?(word[0])
      return "#{word}#{yay}".capitalize
    else
      vowel_index = word.chars.index { |letter| vowel? letter }
      first_consonants = word[0...vowel_index]
      middle = word[vowel_index...word.length]
      word = "#{middle}#{first_consonants}#{ay}".capitalize
    end
  end

  def translate(sentence)
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
