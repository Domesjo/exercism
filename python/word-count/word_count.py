import re
def word_count(str1):
    str1 = re.split(r"[^A-Za-z0-9]", str1.lower())
    ans = {}
    for word in str1:
        try:
            if ans[word] and ans[word] >= 1:
                ans[word] += 1
        except KeyError:
            if word != '':
                ans[word] = 1
    print(ans)
    return ans


word_count('go Go GO Stop stop')
