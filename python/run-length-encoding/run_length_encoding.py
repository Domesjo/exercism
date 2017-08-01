def decode():
    pass


def encode(input):
    ans = ''
    for i, letter in enumerate(input):
        count = 1
        if not i == len(input) - 1 and letter == input[i + 1]:
            count += 1
            print(count)
        ans += (letter*count)
    print(ans)
encode("AABBBCCCC")
