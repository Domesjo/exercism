import re
def hey(phrase):
    if re.match(r"[A-Z]", phrase) and phrase == phrase.upper() or re.match(r"[^0-9] g", phrase) and re.match(r".*\!", phrase):
        return "Whoa, chill out!"
    elif re.match(r".*\?\s*", phrase):
        return "Sure."
    return "Whatever."
hey("WHAT THE HELL WERE YOU THINKING?")
