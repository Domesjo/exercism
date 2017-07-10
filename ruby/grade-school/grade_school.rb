module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end
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
    num_grades = []
    @all_students.map do |student|
      grade = {
        :grade => nil,
        :students=> []
      }
      num_grades << student[:grade]
      grade[:grade] = student[:grade]
      grade[:students] << student
      grade[:students] = grade[:students].sort()
      ans << grade unless grade[:students].length == 0
    end
    num_grades.uniq!

    final = num_grades.map do | grade |
      temp = {:grade => grade, :students => []}
      ans.each do |stu|

        temp[:students] << stu[:students][0][:name] if stu[:grade] == grade
        temp[:students].sort!
      end
      temp
    end
    final.sort_by! do |hsh|
      hsh[:grade]
    end
    return final

  end

end
