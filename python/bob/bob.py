import re
def hey(phrase):
    if re.findall(r"[A-Z]+", phrase) and phrase == phrase.upper() or re.match(r"[^0-9] g", phrase) and re.match(r".*\!", phrase):
        return "Whoa, chill out!"
    elif re.match(r".*\?\s*", phrase):
        return "Sure."
    elif re.findall(r"[^A-Za-z0-9]*", phrase) and not re.findall(r"[A-Za-z]+", phrase):
        return "Fine. Be that way!"
    return "Whatever."
#hey("\t\t\t\t\t\t\t\t\t\t")
