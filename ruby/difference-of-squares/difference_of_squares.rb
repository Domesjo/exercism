module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end
`require 'minitest/pride'`
class Squares
  def initialize(num)
    @int = num
  end
  def square_of_sum
    ints = (0..@int).reduce do |sum, n|
      sum + n
    end
    ints**2
  end
  
  def sum_of_squares
      ints = (1..@int).reduce do |sum, n|
        sum += n**2
      end

      return 0 if ints == nil
       ints.to_i
  end

  def difference
    square_sum =(0..@int).reduce do |sum, n|
        sum + n
    end
    square_sum = square_sum ** 2

    sum_squares = (1..@int).reduce do |sum, n|
      sum += n**2
          end
  return (sum_of_squares - square_sum).abs
  end
end
