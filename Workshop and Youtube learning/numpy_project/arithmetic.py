# addition
# add() function suns the content of two arrays

import numpy as x
array1 = x.array([10,20,30,40])
array2 = x.array([40,30,20,10])
sum = x.add(array1,array2)
subt = x.subtract(array2,array1)     # like this way you can do multiply, power, etc.
print(sum)
print(subt)

# sunstract, multiply, divide, power
# mod() or remainder() -> smae

div = x.divmod(array1,array2)
print(div)

# trunc and fix() removes the number after decimal
array3 = x.trunc([2.24,2.25])    
array4 = x.fix([3.45,5.5])
print(array3)
print(array4)

# summation over an axis
result = x.sum([array1,array2],axis=1)
print(result)

# cumilative sum -> cumsum()
array5 = x.cumsum([array1,array2])
print(array5)

# ufunc
# product
# LCM
# set operations
# hyperbolic
# logs
# trigonometric
# differences