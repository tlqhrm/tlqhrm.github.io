n = int(input())
a = 1
cnt = 1
if n == 1:
    print(n)
    quit()
while True:
    a += 6*cnt
    cnt += 1
    if a >= n:
        print(cnt)
        break