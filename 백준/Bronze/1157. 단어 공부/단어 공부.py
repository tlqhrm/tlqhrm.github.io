n = input().lower()
l = list(set(n))
a = []

for i in l:
    a.append(n.count(i))
if a.count(max(a)) > 1:
    print("?")
else:
    print(l[a.index(max(a))].upper())