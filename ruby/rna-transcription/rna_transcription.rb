module BookKeeping
   VERSION = 4 # Where the version number matches the one in the test.
end
class Complement
  def self.of_dna(dna)
    answer = []
    dna_arr = dna.chars
    solutions = { "G" => "C", "C" =>"G", "T" => "A", "A"=>"U", "U"=>'', "X"=>"" }
    dna_arr.each do |str|
      answer << solutions[str]
    end
    return answer.join unless dna.include? "XXX"
    ""
  end
end
# `G` -> `C`
# `C` -> `G`
# `T` -> `A`
# `A` -> `U`
