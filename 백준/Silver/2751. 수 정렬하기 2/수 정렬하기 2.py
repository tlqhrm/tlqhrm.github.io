v = [int(input()) for i in range(int(input()))]


def mergeSort(v):
    if len(v) >1:
        mid = len(v)//2

        lv = v[:mid]
        rv = v[mid:]
        mergeSort(lv)
        mergeSort(rv)
        li, ri ,i = 0, 0, 0
        while li < len(lv) and ri < len(rv):          
            if lv[li] < rv[ri]:
                v[i] = lv[li]
                li+=1
            else:
                v[i] = rv[ri]
                ri+=1
            i+=1
        if li != len(lv):
            v[i:] = lv[li:]
        else:
            v[i:] = rv[ri:]

mergeSort(v)
print(*v,sep="\n")