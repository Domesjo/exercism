import string
def is_isogram(word):
    alpa = list(string.printable)
    for letter in word:
        try:
            alpa.remove(letter)
        except:
            return False
    return True
