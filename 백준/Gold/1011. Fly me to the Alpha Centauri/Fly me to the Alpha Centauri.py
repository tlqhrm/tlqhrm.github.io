for i in range(int(input())):
    x,y = map(int,input().split())
    cnt = 3
    r = 2
    a = 3
    n = y-x
    if n < 3:
        print(n)
    else:
        while True:
            cnt+=r
            
            if n < cnt:
                print(a)
                break
            a+=1
            cnt+=r
            if n < cnt:
                print(a)
                break
            a+=1
            r+=1