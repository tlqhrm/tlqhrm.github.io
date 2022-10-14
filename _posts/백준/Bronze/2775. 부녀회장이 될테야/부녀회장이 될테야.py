for i in range(int(input())):
    a = int(input())
    b = int(input())
    t = list(range(1,b+1))
    n = list(range(1,b+1))
    w = 0
    
    for h in range(a):

        for j in range(b-1):
            n[j+1] += n[j]

    print(max(n))