# you can write to stdout for debugging purposes, e.g.
# puts "this is a debug message"
#Basiclly I need to find all the uniqe combinations in an array
H = [ 13, 2, 5 ]
def solution(h)
  arr = h.to_a
  ans = []
  arr.each_index do |i|
    home_height = 0
    home_index = i
    ans << arr.combination(i).to_a
  end
  p ans
end

solution(H)
