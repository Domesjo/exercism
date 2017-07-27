# `G` -> `C`
# `C` -> `G`
# `T` -> `A`
# `A` -> `U`
def to_rna(rna):
    replacement = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    ans = ''
    for letter in rna:
        ans += replacement[letter]
    return ans
#to_rna('G')
