module BookKeeping
   VERSION = 1 # Where the version number matches the one in the test.
end
class Pangram
  @alpa = ("a".."z").to_a
  def self.pangram?(str)
    arr = str.downcase.chars.uniq - [" ", nil];
  ans = @alpa.all? do |val|

      arr.include?val
    end
    return ans unless str==""
  end

end
