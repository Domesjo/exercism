module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
class Sieve
  def initialize(int)
    @int = int
  end
  def primes()
    zero_to_int = (1..@int).to_a
    ans = []
    zero_to_int.map! do |val|
      if is_prime(val)
        ans << val
      end
    end
    return ans
  end

  def is_prime(x)
    if x <= 1
      return false
    elsif x <= 3
      return true
    elsif x % 2 == 0 || x % 3 == 0
      return false
    end
    i = 5
    w = 2

    while i * i <= x do
      if x % i == 0
        return false
      end
      i += w
      w = 6 - w
    end
    return true
  end
end
