word = input()
sec = 0
dial = ["ABC","DEF","GHI","JKL","MNO","PQRS","TUV","WXYZ"]

for i in word:
    for j in range(len(dial)):
        if i in dial[j]:
            sec += (j + 3)
print(sec)