class Bob
  def self.hey(str)

    if str[str.length-1] == '?' && !(str == str.upcase) || str.count("a-zA-Z") <= 0 && str[str.length-1] == '?'
       return response('question')
    elsif str == ''
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
