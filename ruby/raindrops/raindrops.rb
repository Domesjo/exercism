require "prime"

module BookKeeping
   VERSION = 3 # Where the version number matches the one in the test.
 end

class Raindrops
  def self.convert(int)
    answers = []
    factors = int.prime_division.map(&:first)
    solution = {3=> "Pling", 5=>"Plang", 7=>"Plong" }
    factors.map{ |factor|
      answers << solution[factor]
    }

    return answers.compact.join unless (answers.compact.join.length != 0 && answers.compact.length == 0 || answers.compact.length == 0 || answers.empty?)
     int.to_s
  end
end
