def word_count(str1):
    str1 = str1.split()
    ans = {}
    for word in str1:
        try:
            if ans[word] and ans[word] >= 1:
                ans[word] += 1
        except KeyError:
            ans[word] = 1
    print(ans)
    return ans

word_count('one of each')
