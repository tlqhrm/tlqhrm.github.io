a,b = map(int,input().split())
prime = [False,False] + [True]*(b-1)

for i in range(2,b+1):
    if prime[i]:
        if i >=a:
            print(i)
        for j in range(2*i,b+1,i):
            prime[j]=False