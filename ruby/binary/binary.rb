class Binary
  # binary multipliced (n*2)^2
  def self.to_decimal(n)
    decimal = 0
    for i in n.chars
      index = n.chars.index i
      decimal += converter(i.to_i, index)
    end
    return decimal.to_i
  end
  def self.converter(n, index)
    return (n*2)**index unless n== 0
    0
  end
end
