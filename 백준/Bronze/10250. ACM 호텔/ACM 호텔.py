t = int(input())


for r in range(t):
    h,w,n = map(int,input().split())
    m = 0
    for i in range(1,w+1):
        for j in range(1,h+1):
            m+=1
            if n == m:
                if i < 10:
                    print("{}0{}".format(j,i))
                    break
                else:
                    print("{}{}".format(j,i))
                    break