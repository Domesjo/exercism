class School
  def initialize()
    @all_students = []
  end

  def students(i)
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
    @all_students.map do |student|
      grade = {}
      grade[student[grade]] = student[name]
      ans << grade
    end
    return ans
  end
end
