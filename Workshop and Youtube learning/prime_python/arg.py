def myfunction(*a):
    return a*2

test = myfunction(10,20,30,40)
print(test)

# string

def myfunction(*args):
    return len(args)

test = myfunction('hi', 'student')
print(test)

# **kwargs -> it handles the arbitary number of keyworded argument
# keys n values
# instead of creative tuple of value **kwargs build a dictionary of key/value pairs

def demoFunc(**kwargs):
    if 'fruit' in kwargs:
        return print(f"my favorite fruit is {kwargs['fruit']}")
    
    else:
        return 0
    
result = demoFunc(fruit = 'orange')
print(result)

# *args amd **kwargs combination

def mychoice(*args, **kwargs):
    if 'fruit' and 'juice' in kwargs:
        print(f"I like {' and '.join(args)} and my favourite fruit is {kwargs['fruit']}")
        print(f"may i have {kwargs['juice']} juice please?")

    else:
        pass
    # if we have to print anything or dont have any more condition to check just use this pass

mychoice('eggs', 'fish', fruit = 'grapes', juice = 'mango')

