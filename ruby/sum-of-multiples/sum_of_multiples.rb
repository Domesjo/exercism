module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
class SumOfMultiples
  def initialize(n1=nil, n2=nil, n3=nil)
    @n1 = n1
    @n2 = n2
    @n3 = n3
  end

  def to(int)
    ans = 0
    (1..int-1).to_a.each do |number|
      if @n1 && number % @n1 == 0
        ans += number
      elsif @n2 && number % @n2 == 0
        ans += number
      elsif @n3 && number % @n3 == 0
        ans += number
      end
    end
    return ans
  end
end
