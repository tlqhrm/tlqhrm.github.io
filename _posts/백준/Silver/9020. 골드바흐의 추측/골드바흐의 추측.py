n = int(input())

ran = 10000
prime = [False,False] + [True]*(ran - 2)
primes = []
for i in range(2,ran):
    if prime[i]:
        primes.append(i)
        for j in range(i*2,ran,i):
            prime[j]=False
    
for _ in range(n):
    x = int(input())
    for i in range(x//2,1,-1):
        if (x-i in primes) and (i in primes):
            print(i,x-i) 
            break