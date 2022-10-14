n = list(input())
a = list("abcdefghijklmnopqrstuvwxyz")
for idx, i in enumerate(a):
    if a[idx] in n:
        print(n.index(i), end=" ")
    else :
        print("-1", end=" ")