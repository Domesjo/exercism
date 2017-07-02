module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end
class Binary
  # binary multipliced (n*2)^2
  def self.to_decimal(n)
    for i in n.chars
      raise ArgumentError.new("Not valid binary") if i.match(/[a-zA-Z2-9]/)
    end
    decimal = 0
    n.chars.each.with_index do |i, index|
      decimal += converter(i.to_i, ((n.chars.length - 1 ) - index))
    end
    return decimal
  end
  def self.converter(n, index)
    return ((n*2)**index) unless n == 0
    0
  end
end

Binary.to_decimal('11')
