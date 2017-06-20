module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
class Grains
  def self.square(i)
    if !(1..64).to_a.include?(i)
      raise ArgumentError.new("gotta be a number between 1 and 64")
    end
    grains = 1
    boardNum = i
    return calculateBoardNum(boardNum , grains)

  end

  def self.calculateBoardNum(x, grains)
    if( x == 1)
      return grains
    end
    grains = grains * 2
    return calculateBoardNum(x-1, grains)
  end

  def self.total
    i = 1
    grains = 1
    while i < 64 do
      grains += square(i)
      i = i + 1
    end
    return grains * 2 - 1
  end
end
