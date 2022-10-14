import sys

c = [0]*10000
n = int(sys.stdin.readline())
for _ in range(n):
    c[int(sys.stdin.readline())-1] +=1
for i in range(len(c)):
    if c[i] > 0:
        for _ in range(c[i]):
            print(i+1)