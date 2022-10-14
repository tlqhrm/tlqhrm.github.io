n = int(input())
group_word = 0

for n in range(n):
    word = list(input())
    x = 0
    for i in word:
        num_a = word.count(i) #2
        
        if num_a > 1:
            for j in range(num_a-1):
                # print(word.index(i,word.index(i) + 1 +j),word.index(i,word.index(i)+j))
                
                if word.index(i,word.index(i) + 1 +j) - word.index(i,word.index(i)+j) > 1:
                    x += 1
                    break
                
    # print(x)        
    if x > 0:
        pass
    else:
        group_word +=1                    
print(group_word)