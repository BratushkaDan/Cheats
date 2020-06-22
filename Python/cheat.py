# misc
int(15.56)  # drops fraction part
queries = open("input.txt", "r").read().splitlines()

# Accessing array
a = [1, 2, 3, 4]
print('a[2:]', a[2:])  # [3, 4]
print('a[2:3]', a[2:3])  # [3]
print('a[-1]', a[-1])  # 4
print('a[-1:1]', a[-1:1])  # []
print('a[1:-1]', a[1:-1])  # [2, 3]
print('a[:-1]', a[:-1])  # [1, 2, 3]
print('a[1:4]', a[1:4])  # [2, 3, 4]
print('a[-4:-2]', a[-4:-2])  # [1, 2]

# Arrays and mapping
A = [1, 2, 3]
B = [4, 5]
print((B + A) * 2)  # [4, 5, 1, 2, 3, 4, 5, 1, 2, 3]
B.pop()  # pops the last element from list

print(*range(0, 3))  # 0 1 2
print(*"Hello", sep='--')  # H--e--l--l--o

# * unpacks arguments from iterable object

# for looping
Arr = [i ** 2 for i in range(1, 6)]
print(*(m for m in a if m % 10 == m % 16))
print(max((m for m in a if m % 10 == m % 16), default=0))
a, b = [int(x) for x in input().split()] # two similar ways of mapping 2 values given in string
a, b = list(map(int, input().split())) # two similar ways of mapping 2 values given in string

# Numeral system conversion
k = 0
for b in a:
    if len(hex(b)[2:]) == len(str(b)):
        k += 1
print(k)
int("20", 6)  # converts 6-base number to 10-base
print(0b1101, -0b1101)  # 13, -13
print(bin(13))  # 0b1101
print(0o77, oct(0o77))  # 63, 0o77
print(0xFF, 0xff, hex(255))  # 255, 255, 0xff

# Function arguments


def foo(x, y):
    return x ** 2 + y

foo(1, 2)  # 3
foo(y=2, x=1)  # 3

# Formatting
x, y = 2, 3
print('x: {}, y: {}'.format(2, 3))
print(f'x: {x}, y: {y}')

# Boolean assignment
is_all_even = True
is_any_negative = False
for num in numbers:
    is_all_even &= num % 2 == 0
    is_any_negative |= num < 0

# Supplement functions
sum(randint(1, 10) for k in range(0, 10))
max(a, b)  # at least 2 variables or iterable object
min(x, y)  # at least 2 variables or iterable object
abs(x - y)

# Find in <class 'iterable'>
iterable = 'any array, or string etc.'
iterable.find(',')  # finds index of the char or the element

# Strings and characters
string = 'abcd'  # strings can be accessed using indexes: string[2] results in c, string[1:4] results in 'bcd'
print(ord('f'))  # 102
print(chr(102))  # 'f'
string.title()  # every word separated with whitespace is capitalized
string.upper()
string.lower()