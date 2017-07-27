def to_rna(rna):
    replacement = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    ans = ''
    for letter in rna:
        try:
            ans += replacement[letter]
        except KeyError:
            return ''
    return ans
