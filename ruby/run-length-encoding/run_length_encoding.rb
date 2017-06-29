module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end
class String
  def is_i?
     /\A[-+]?\d+\z/ === self
  end
end
class RunLengthEncoding
  def self.encode(input)
    arr = input.chars
    ans = ''
    count = 1
    arr.each_index do |index |
      if arr[index] != arr[index+1]
        if count > 1
          ans += count.to_s + arr[index]
        else
          ans += arr[index]
        end
          count = 1
      else
        count += 1
      end
    end
    return ans
  end

  def self.decode(input)
    arr = input.chars
    ans = ''
    arr.each_index do |index|
      if arr[index].is_i? && arr[index+1].is_i?
        mult = (arr[index] + arr[index+1]).to_i
        ans += arr[index+2] * mult
      elsif arr[index].is_i? && !arr[index-1].is_i?

        ans += arr[index+1] * (arr[index].to_i)

      elsif arr[index] != arr[index+1] && arr[index] != arr[index-1] && !!!arr[index-1].is_i?
        ans += arr[index]
      end
    end
    return ans
  end

end
