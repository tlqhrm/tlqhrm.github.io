word = input()

ca = ["c=","c-","dz=","d-","lj","nj","s=","z="]


for i in range(len(ca)):
    if ca[i] in word:
        word = word.replace(ca[i],"1")
        
print(len(word))