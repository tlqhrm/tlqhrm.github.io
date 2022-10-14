n = int(input())

for i in range(n):
    student = list(map(int,input().split()))
    total = 0
    good_stu = 0
    for i in range(1,len(student)):
        total += student[i]

    ave = total/(len(student)-1)
    
    for i in range(1,len(student)):
        if student[i] > ave:
            good_stu +=1
    print("%.3f"%(good_stu/(len(student)-1)*100) + "%")
        