import re
def hey(phrase):
    if re.match(r".*\?\s*", phrase):
        return "Sure."
    return "Whatever."
