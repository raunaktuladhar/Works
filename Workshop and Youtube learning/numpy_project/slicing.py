# slicing array: slicing in python means taking elements from one given index to another
# [start:end], [start:end:step]

import numpy as np
messi = np.array([2,3,5,7,9,11,13,17])
print(messi[2:5])
print(messi[1:7:2])    # 1-6 with difference of 2

neymar = np.array([[1,2,3,4,5],[6,7,8,9,10]])
print(neymar)
print(neymar[0, 1:4])    # 1st wala purple bracket ko herney ani blue bracket herney
print(neymar[0:3, 1])      # 1st wala purple bracket ko herney ani blue bracket herney
print(neymar[0:2, 0:3])  # 1st wala purple bracket ko herney ani blue bracket herney

# negative slicing
suarez = np.array([23,5,7,9,11,13])
print(suarez[-5:-1])
print(suarez[4:])
print(suarez[::])      # returns every value