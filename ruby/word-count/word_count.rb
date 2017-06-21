module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
class Phrase
  def initialize(word)
    if word.include?('\n') then
      @word = word.split(',\n')
    else
      @word = word.split(/[^a-zA-Z0-9']/)
    end
  end

  def word_count
    p @word.delete_if(&:empty?)
    ans = {}
    @word.delete_if(&:empty?).map do |word|
      word = word.downcase
      if word[0] == "'" && word[0] == word[-1]
        word = word[1..(word.length-2)]
      end
      p word
      if ans[word]
        ans[word] += 1
      else
        ans[word] = 1
      end
    end
    return ans
  end
end
