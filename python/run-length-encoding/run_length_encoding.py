def decode():
    pass


def encode(input):
    ans = ''
    count = 1
    for i, letter in enumerate(input):
        if not i == len(input) - 1 and letter == input[i + 1]:
            count += 1
        else:
            if count > 1:
                ans += str(count) + letter
            else:
                ans += letter
            count = 1
    print(ans)
    return ans
encode("AABBBCCCC")
