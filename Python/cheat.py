int(15.56)  # drops fraction part
int("20", 6)  # converts 6-base number to 10-base
print(":".join(list(map(str, [12, 20, 22]))))

queries = open("input.txt", "r").read().splitlines()
lst = [1, 2, 3, 4, 5, 6]
lst[-1]  # 6
lst[1:3]  # 2, 3
lst[-3:-1]  # 5, 6
lst[:3]  # 1, 2, 3
lst[4:]  # 5, 6
