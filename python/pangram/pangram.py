import string
def is_pangram(word):
    alpa = list(string.ascii_lowercase)
    word = word.replace(' ','')
    print(word)
    for letter in word:
        alpa.remove(letter)
is_pangram('the quick brown fox jumps over the lazy dog')
