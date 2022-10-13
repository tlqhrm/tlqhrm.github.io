n = int(input())
if n not in (3,4,6,7,9):
    if n%5 ==0:
        print(n//5)
    else:
        if n%5 in (1,4,7):
            print(n//5 + (n%5+5)//3 -1) 
        elif n%5 == 2:
            print(n//5 + (n%5+10)//3 -2)

        elif n%5 ==3:
            print((n//5) + (n%5)//3)
        elif n%3 ==0:
            print(n//3)
        else:
            print(-1)
else:
    if n in (3,6,9):
        print(n//3)
    else:
        print(-1)