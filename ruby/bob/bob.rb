class Bob
  def self.hey(str)
    if str[str.length-1] == '?'
       return response('question')
    end
    return response('none') unless str.upcase == str
    return response('angry')
  end
  def self.response(i)
    resp = {"none": 'Whatever.', "question": 'Sure.', "empty": 'Fine. Be that way!', "angry": 'Whoa, chill out!'}
    return resp[i.to_sym]
  end
end
