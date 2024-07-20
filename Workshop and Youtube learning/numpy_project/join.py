import numpy as RBST
# c = [[1,2,3],[3,4,5],[3,4,5]]
# print(c)
array1 = RBST.array([[2,3],[5,7]])
array2 = RBST.array([[9,11],[13,17]])
concat = RBST.concatenate((array1,array2),axis=1)
print(concat)