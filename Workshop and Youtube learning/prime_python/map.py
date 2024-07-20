# map function allows us to to map a function to an iterable object, this is to say that,
# def squarefunction(a):
#     return a**2

# mylist = [2,3,5,7,9]
# # car = squarefunction(mylist)
# # not allowed to write parenthesis with function into method
# result = list(map(squarefunction,mylist))
# print(result)

def checkFunction(b):
    if len(b)%2==0:
        return 'even'
    
    else:
        return b
    
player = ['messi', 'neymar', 'ronaldo', 'ibrahimovic']
results = list(map(checkFunction,player))
print(results)