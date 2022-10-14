x_1,y_1 = map(int,input().split())
x_2,y_2 = map(int,input().split())
x_3,y_3 = map(int,input().split())

x=sorted([x_1,x_2,x_3])
y=sorted([y_1,y_2,y_3])

if x[0]==x[1]:
    if y[0]==y[1]:
        print(max(x),max(y))
    else:
        print(max(x),min(y))
else:
    if y[0]==y[1]:
        print(min(x),max(y))
    else:
        print(min(x),min(y))