# pandas is a python library used for working with data sets
# pandas -> panel data or python data analysis
# it has function for analyzing, cleaning, exploring and manipulating data
# it is used because it allows us to analyze BIG DATA and make conclusions based on statistical theories
# it can clean messy data sets and make them readable and relevant
# it is very important in data science(store, use and analyze data)
# to install -> pip install pandas

import pandas as pd
# print(pd.__version__)      # for version

# dataset ={
#     'cars' : ['Hyundai', 'tesla'],
#     'mydata' : [2,5]
# }
# # Note: all array should be same inside a dictionary
# print(dataset)
# result = pd.DataFrame(dataset)
# print(result)

# series
# its like a column in a table
# 1-D array holding data of any type

# x = [1,3,5,7,9]
# # result1 = pd.Series(x)
# # print(result1)

# # # labels -> it is used to access the specified value from series and named it
# # print(result1[1])

# indexing -> you can create your own label
# result2 = pd.Series(x, index = ['a', 'b', 'c', 'd', 'e'])
# print(result2)
# print(result2['c'])     # returns the value situated in it

# key/value pair objects as a series
# students = {
#     'first_name' : 'Lionel',
#     'last_name' : 'Messi',
#     'age' : 36,
#     'address' : 'Rosario'
# }
# print(students)
# result5=pd.DataFrame(students)
# print(result5)
# result4=pd.Series(students,index=[1,2,3,4,5])
# result3 = pd.Series(students, index = ['1','2','3','4'])
# print(result3)

# dataframe -> it is a 2-D data structure like a 2-D array or table with row and column
# Dataframe are usually multidimensional tables, whole table

marks = {
    'subject' : ['Physics', 'Chemistry', 'Mathematics'],
    'obtained_marks' : [65,70,73]
}
test1 = pd.DataFrame(marks)
# print(test1)
test2 = pd.Series(marks)
# print(test2)

# # # loc -> locate rows; pandas use the loc attribute to return one or more specified row
print(test1.loc[0])   # in series
print(test1.loc[[0,1]])    # as dataframe

test3 = pd.DataFrame(marks,index = ['first', 'second', 'third'])
print(test3)

# # locate the named index:
print(test3.loc[['second','third']])

# # 