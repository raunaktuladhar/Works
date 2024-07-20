# numpy is a python library / established in 2005
# numpy is used to worked with arrays
# numpy is short form of numerical python
# it also has function for working domain of linear algebra, fourier transform and matrices
# execution of arrays in numpy is 50x faster than traditional python list
# the array object in numpy is called ndarray
# it is written in c or c++
# to install numpy : pip install numpy

# to create a numpy ndarray object

import numpy as x      # make sure that you dont have any local files named as numpy.py, which would create a attribute error
a = x.array([2,3,5,7,9])  # one dimensional array
print(a)
print(type(a))    # <class 'numpy.ndarray'>
print(x.__version__)   # 1.26.2
test = x.array((1,2,3,4,5,6))      # we can pass any list, tuple or any array like object with array(). will be converted into nddarray
print(test)

# 0-D
b = x.array(10)
print(b)

# 1-D
c = x.array([2,4,6,8,10])
print(c)

# 2-D
d = x.array([[2,4,6,8,10],[2,3,5,7,9]])
print(d)

# 3-D
e = x.array([[[2,4,6,7],[2,3,5,6]],[[1,2,3,5],[7,8,9,10]]])     # cardinality must be same : like in every array list
print(e)

# check number of dimension using ndim; use to check the dimension of an array
print(c.ndim)
print(b.ndim)
print(d.ndim)
print(e.ndim)

# converting one dimension into 5
test1 = x.array([1,2,3,4,5],ndmin=5)
print(test1)
print("Number of dimension is:", test1.ndim)

# indexing
z = x.array([1,2,3,4,5,6,7])
print(z[0])
print(z[2]+z[3])

y = x.array([[1,2,3,4],[2,3,5,7]])
print(y[1,1])
# agaadi ko 1 bhaney ko purple bracket ko 2nd blue bracket ani paxaadi ko 1 bhaney ko blue bracket ko 2nd element

k = x.array([[[1,2,3,4],[2,3,4,5]],[[4,5,6,7],[4,5,6,3]]])
print(k[0,1,2])
print(k[1,1,2])