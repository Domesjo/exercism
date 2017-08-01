def decode():
    pass


def encode(input):
    ans = ''
    count = 1
    for i, letter in enumerate(input):
        if not i == len(input) - 1 and letter == input[i + 1]:
            count += 1
        else:
            ans += str(count) + letter
            print(letter*count)
            count = 1
    print(ans)
    return ans
encode("AABBBCCCC")
