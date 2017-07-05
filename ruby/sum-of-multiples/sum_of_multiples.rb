class SumOfMultiples
  def initialize(n1, n2)
    @n1 = n1
    @n2 = n2
  end

  def to(int)
    ans = 0
    (0..int-1).to_a.each do |number|
      if number % @n1
        ans += 1
      elsif number % @n2
        ans += 1
      end unless number == 0
    end
    return ans
  end
end
