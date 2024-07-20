# mylist1 = [2,4,6,8,10,12]
# mylist2 = ['a', 'e', 'i', 'o', 'u']
# myzip = list(zip(mylist1, mylist2))
# print(myzip)
# # as mylist1 has 6 elements and mylist2 has 5 elements, 
# # 5 pair zip will be print as there is no pairing element for 6th element '12' in mylist2

# # list comprehensions
# #  1. it allows us to build out list using different notation
# #  2. You can think of it as essentially a one line for loop inside of brackets
# #  3. grab every letter in string

# test = [x for x in "JAY-NEPAL"]
# print(test)

# # to print the square of a number from the range list 
# y = list(range(0,11))
# print(y)
# z = [k*k for k in y]  #single astrick(*) means multiplication 
# print(z)

# # z part can be written as below code
# l = [m**2 for m in range(0,11)]
# print(l)

# # others
test1 = [a for a in range(0,23,3)]
print(test1)

test2 = [b for b in range(0,13)]
print(test2)

test3 = [c for c in range(0,13) if c%2==0 ]
print(test3)

celsius = [0,40,100, -40]
fahrenheit = [((9/5)*temp+32) for temp in celsius]
print(fahrenheit)

# comprehension in nested list
result = [x**2 for x in[x**2 for x in range(0,12)]]
print(result)