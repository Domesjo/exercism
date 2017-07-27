# `G` -> `C`
# `C` -> `G`
# `T` -> `A`
# `A` -> `U`
def to_rna(rna):
    replacement = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    return replacement[rna]
#to_rna('G')
