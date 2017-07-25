import string
def is_isogram(word):
    word = word.lower()
    alpa = list(string.ascii_lowercase)
    for letter in word:
        if letter != '-' or letter != ' ':
            print(letter)
            try:
                alpa.remove(letter)
            except:
                print('thorws')
                return False
    return True
is_isogram("Emily Jung Schwartzkopf")
