class School
  def initialize()
    @all_students = []
  end

  def students(i=0)
    ans = []
    @all_students.map do |student|
      if student[:grade] == i
        ans << student[:name]
      end
    end
    return ans.sort()
  end

  def add(name, grade)
    @all_students << {name: name, grade: grade}
  end

  def students_by_grade
    ans = []
    grade = {
      students=> []
    }
    @all_students.map do |student|
      grade[:grade] = student[:grade] unless grade.key(:grade)
      grade[student[:grade]] = student[:students] << student[:name]
      ans << grade
    end
    return ans
  end

end