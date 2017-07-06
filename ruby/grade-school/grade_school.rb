class School
  def initialize()
    @all_students = []
  end

  def students(i)
    ans = []
    @all_students.select do |student|
      if student[:grade] == i
        ans << student[:name]
      end
    end
    return ans.sort()
  end

  def add(name, grade)
    @all_students << {name: name, grade: grade}
  end
end
