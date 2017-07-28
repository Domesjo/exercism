import re
def word_count(str1):
    str1 = re.split(r"[^A-Za-z0-9]", str1)
    ans = {}
    for word in str1:
        print(word)
        try:
            if ans[word] and ans[word] >= 1:
                ans[word] += 1
        except KeyError:
            if word != '':
                ans[word] = 1
    return ans

word_count('testing 1 2 testing')
