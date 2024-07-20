# random number generating from numpy
# random number is use to generate any particular number between the range

from numpy import random
# x = random.randint(50)    # any one random integer number below or equal to 50
# print(x)

# # random number between 0 to 1
# y = random.rand()
# print(y)

# random array
# z = random.randint(100,size=5)
# print(z)

# # 2-D array
# k = random.randint(100, size=(3,5))
# print(k)

# 3-D array
l =random.randint(100,size=(2,3,5))
print(l)

# random array of floating number
m = random.rand(4)
print(m)

# generate random number from an array
o = random.choice([4,5,6,23,56])
print(o)

# generate random array from the elements in array
q = random.choice([1,53,5,7,9], size=(2,3))
print(q)

