h, m = map(int,input().split())

m -= 45
if m < 0:
    if h == 0:
        print(23,m+60)
    else:
        print(h-1,m+60)
else:
    print(h,m)