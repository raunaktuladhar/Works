# WAP to print the even no. from random number list

def filterFunc(a):
    return a%2==0

mylist = [2,4,6,8,9,10,14,17]
filterdata = list(filter(filterFunc,mylist))
print(filterdata)

# WAP to print the greater than 4 and less than 15

def selected_range(a):
    return a>5 and a<15

mylist1 = [2,4,6,8,9,10,14,17]
filterdata1 = list(filter(selected_range,mylist1))
print(filterdata1)