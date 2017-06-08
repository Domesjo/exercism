module BookKeeping
   VERSION = 3 # Where the version number matches the one in the test.
end
class Hamming
  def self.compute(data1, data2)
    raise ArgumentError if data1.length != data2.length
    answer = []
    original = data1.chars
    duplicate = data2.chars

  original.each_with_index do |val, index|
    answer <<  original[index] if original[index] != duplicate[index]
  end
   answer.length
  end

end
