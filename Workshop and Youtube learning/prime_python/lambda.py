# lambda: anonymous function: no proper name defined

# simple user defined function
def square(a):
    return a**2

result_square = square(5)
print(result_square)

# lambda expression
square1 = lambda b:b**2
result1 = square1(7)
print(result1)

mylist = [2,4,6,8,10]
result3 = list(map(lambda c:c**2, mylist))
print(result3)