import string
def is_isogram(word):
    word.lower()
    alpa = list(string.ascii_lowercase)

    for letter in word:
        if letter != '-':
            try:
                alpa.remove(letter)
            except:
                return False
    print(alpa)
    return True
