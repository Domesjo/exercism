import re
def hey(phrase):
    if re.match(r".*\?\s*", phrase):
        return "Sure."
    elif phrase == phrase.upper() or re.match(r"[^0-9] g", phrase) and re.match(r".*\!", phrase):
        return "Whoa, chill out!"
    return "Whatever."
