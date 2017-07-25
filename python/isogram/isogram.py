import string
def is_isogram(word):
    word = word.lower()
    alpa = list(string.ascii_lowercase)
    for letter in word:
        if letter != '-' and letter != ' ':
            print(letter)
            try:
                alpa.remove(letter)
            except:
                return False
    return True
is_isogram("Emily Jung Schwartzkopf")
