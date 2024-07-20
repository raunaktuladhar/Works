# string, integer, float, boolean, complex, etc. are datatypes in python
# i-> int, b-> boolean, u ->unsigned int, f->float, c->complex float
# m->timedelta, M -> datatime, o->object, S->string, U->unicode string
# V-> fixed chunk of memory for other data type (void)""

import numpy as raunak
# cr = raunak.array([1,2,3,4,5])
# print(cr.dtype)      # dtype -> datatype; returns int32

# create array with datatype string

# neymar = raunak.array(["1","2","3"],dtype="S")
# print(neymar)
# print(neymar.dtype)

# create an array with datatype of 4 byte int:
# test = raunak.array(['a',2,3,4],dtype='i4')
# print(test)
# print("here again", test.dtype)     # ValueError: invalid literal for int() with base 10: 'a'

# converting data type in int type = astype
# test1 = raunak.array([1.0,2.1,3.1])
# test2 = test1.astype('i')
# print('final',test2)
# print(test2.dtype)    # ValueError: invalid literal for int() with base 10: 'a'

# converting int data type into boolean datatype = bool
# test1 = raunak.array([2,0,4,0,6])
# test2 = test1.astype(bool)
# print('final2',test2)
# print(test2.dtype)   

# array shape
# suarez = raunak.array([[1,2,3,4],[4,5,6,9]])
# print(suarez.shape) 

# reshape 1-D to 2-D
# a = raunak.array([1,2,3,4,5,6,7,8,9,10,11,12])
# print(a)
# b = a.reshape(4,3)    # 4 is row and 3 is column or (4,3) means 4 array, each array contains 3 elements
# print(b)

# 1-D to 3-D
a = raunak.array([1,2,3,4,5,6,7,8,9,10,11,12])
print(a)
b = a.reshape(2,3,2)    # (2,3,2) means 2 list like, 3 array, each array contains 2 elements
print(b)