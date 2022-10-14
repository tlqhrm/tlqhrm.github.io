for i in range(int(input())):
    x,y = map(int,input().split())
    to_distance = 3
    repeat = 2
    move_count = 3
    distance = y-x
    if distance < 3:
        print(distance)
    else:
        while True:
            to_distance+=repeat
            if distance < to_distance:
                print(move_count)
                break
            move_count+=1
            to_distance+=repeat
            if distance < to_distance:
                print(move_count)
                break
            move_count+=1
            repeat+=1