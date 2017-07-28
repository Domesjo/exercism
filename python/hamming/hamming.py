def distance(str1, str2):
    if len(str1) != len(str2):
        raise ValueError("Bruuuh string not even the same length")
    diff = 0
    for i in range(len(str1)):
        if not str1[i] == str2[i]:
            diff += 1
    return diff
