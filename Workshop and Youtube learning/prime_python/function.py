# # function is a block of code to perform the particular task
# # remember particular function has particular task to perform
# # it can be reuse multiple times so it is most required for large applications
# # while naming function name, it using as variable, hypen, number at starting, spaces, keyword are not allowed to use
# # they are defined using 'def' keyword
# # user defined -> user defined function
# # in built defined -> methods

# # define function
# def demoFunction():
#     print('this is a user defined function')
#     # pass
#     # function khaali raakhnu bhayenw tesailey 'pass' keyword use hunxw coz paxi future maa kaam laag nw sakxw

# # call the funtion
# demoFunction()
# # while defining function use parenthesis after string

# # 2   function with argument
# # 2.1 define function

# def testfunction(first_value,second_value):
#     print('First value: ', first_value, 'Second value: ', second_value)
#     print('sum: ',first_value + second_value)
# # 2.2 call the function
# testfunction(20,30)

# # 3 return type
# # 3.1 define the function
# def multiply(a,b):
#     return a*b
# # 3.2 call function
# result = multiply(5,4)
# print('multiplication', result)

# shuffle
from random import shuffle
# mylist = [1,2,3,4,5,6,7]
# shuffle(mylist)     # used to arrange elements in random order
# print(mylist)

# 4 interactio with different functions
# 4.1 function define
# def shuffle1(a):
#     shuffle(a)
#     return a

# # 4.2 call function

# mylist = ['A', 'P', 'P', 'L', 'E']
# result = shuffle1(mylist)
# print(result)

# returning tuples for unpacking

# free_transfer = [("Messi", 700), ("Benzema", 150), ("Silva", 75), ("Alves", 85)]
# for player in free_transfer:
#     print(player)     # tuples sanga print hunxw

# for player, market_value in free_transfer:
#     print(player)

# for player, market_value in free_transfer:
#     print(market_value)

