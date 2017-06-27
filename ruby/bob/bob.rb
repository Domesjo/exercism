module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
class Bob
  def self.hey(str)
    if str.delete(' ')[-1]== '?' && !(str == str.upcase) || str.count("a-zA-Z") <= 0 && str[-1] == '?'
       return response('question')
    elsif str == '' || str.count("[[^ \t]]") > 1 && str.count("/^[a-zA-Z0-9_.-]*$/") <= 0
      return response('empty')
    elsif str == str.upcase && str.count("a-zA-Z") > 0
      return response('angry')
    end
    return response('none') unless str == str.upcase && str.count("a-zA-Z") > 0
    return response('angry')
  end
  def self.response(i)
    resp = {"none": 'Whatever.', "question": 'Sure.', "empty": 'Fine. Be that way!', "angry": 'Whoa, chill out!'}
    return resp[i.to_sym]
  end
end
