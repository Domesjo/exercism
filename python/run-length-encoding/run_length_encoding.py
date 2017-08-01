import re
def decode(output):
    ans = ''
    for i, letter in enumerate(output):
        if re.match(r"[0-9]", letter):
            if not i == len(output) - 1 and re.match(r"[0-9]", output[i + 1]):
                print((int((str(letter) + str(output[i +1])))))
                ans += output[i + 2] * (int((str(letter) + str(output[i +1]))) - int(output[i +1]))
            else:
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
decode("12WB12W3B24WB")
