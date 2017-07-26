import string
def is_pangram(word):
    alpa = list(string.ascii_lowercase)
    word = list(word.replace(' ','').lower())
    for letter in word:
        try:
            i = alpa.index(letter)
            alpa.remove(str(letter))
        except:
            print(' ')
    if len(alpa) == 0:
        return True
    return False
