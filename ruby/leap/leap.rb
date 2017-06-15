module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end
class Year

  def self.leap?(year)
    p year%4 == 0 && (year/100)%2 != 0 || (year/400)%2 == 0
    if(year%4 == 0 && year%100 != 0 || year%400 == 0)
      return true
    end
    false
  end

end
