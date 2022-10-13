N,M,*B=open(0).read().split()
r=range
print(min([min(c:=sum((B[x+i][y+j]=='B')^(i+j)%2 for i in r(8)for j in r(8)),64-c) for x in r(int(N)-7)for y in r(int(M)-7)]))