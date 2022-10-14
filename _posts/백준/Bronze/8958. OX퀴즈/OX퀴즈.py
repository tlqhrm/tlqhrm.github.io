n = int(input())


for i in range(n):
    a = list(input())
    o_score = 0
    total_scroe = 0

    for b in a:
        if b =="O":
            o_score +=1
            total_scroe += o_score
        else:
            o_score = 0
    print(total_scroe)
