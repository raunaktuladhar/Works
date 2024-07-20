# difference between copy and view
# will make a copy, change in original array and display both

# CODE1
import numpy as np
array1 = np.array([2,3,5,7,9])
# array2 = array1.copy()
# array2[0] = 90
# print(array1)
# print(array2)

# CODE2
array2 = array1.view()
array1[0] = 92
print(array1)
print(array2)

# Return copy or view
e = np.array([1,2,3,4,5,6,7,8])
print(e.reshape(2,4).base)      # view example; base lay eutai line maa print garxw list haru

# iterating
arr3 = np.array([3,4,5,6,7,8,9,10])
for x in arr3:
    print(x)
    
    # or

for x in np.nditer(arr3):
    print('nditer', x)

    # enumerate

for idx, x in np.ndenumerate(arr3):
    print(idx,x)