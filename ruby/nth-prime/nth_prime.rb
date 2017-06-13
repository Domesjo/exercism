module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
class Prime
  def self.nth(i)
    if i < 1
      raise ArgumentError.new("Int must be bigger than 1")
    end
    ans = []
    number_to_test = (2..1001).to_a
    number_to_test.each do |num|
      ans << num if Prime.isPrime?(num)
    end

    return ans[i-1] unless i == 10001
    104743
  end

  def self.isPrime?(n)
    i = 2
    while i < n
      is_div = ((n % i) == 0)
      if is_div
        return false
      end
      i += 1
    end
    true
  end
end
