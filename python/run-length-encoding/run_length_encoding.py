import re
def decode(output):
    ans = ''
    for i, letter in enumerate(output):
        if re.match(r"[0-9]", letter):
            ans += output[i +1] * (int(letter) - 1)
        else:
            ans += letter
    return ans


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
