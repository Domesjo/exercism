module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
class Array
  def accumulate
    ans = []
    each do |val|
      ans << (yield val)
    end
    return ans
  end
end
