import string
def is_pangram(word):
    alpa = list(string.ascii_lowercase)
    word = word.replace(' ','')
    for letter in word:
        print(alpa)
        alpa.remove(str(letter))

is_pangram('the quick brown fox jumps over the lazy dog')
