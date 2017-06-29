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

end
