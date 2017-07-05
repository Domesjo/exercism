class SumOfMultiples
  def initialize(n1, n2)
    @n1 = n1
    @n2 = n2
  end

  def to(int)
    ans = 0
    (1..int-1).to_a.each do |number|
      if number % @n1 == 0
        ans += number
      elsif number % @n2 == 0
        ans += number
      end
    end
    return ans
  end
end
