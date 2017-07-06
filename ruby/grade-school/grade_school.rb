class School
  def initialize()
    @all_students = []
  end

  def students(i)
    return @all_students
  end

  def add(name, grade)
    @all_students << {name: name, grade: grade}
  end
end
