# membership operator are used to test if a sequence is presented in an object
# it returns either true or false
# in and not in -> membership operator

# Barcelona = ['messi', 'Neymar', 'Suarez', 'Ter Stegen']
# print('messi' in Barcelona)
# print('neymar' not in Barcelona)   # here we can observe neymar has 'n' small but in list it is Neymar with 'N'
# print("Neymar" not in Barcelona)
# print("Torres" not in Barcelona)
# print("Argentina" in Barcelona)

# one = "aayan"
# two = "aryan"
# three = "Sushant"
# raunak = "raunak"
# all = ['raunak', 'aayan', 'sushant', 'aryan']
# check = one in all
# print(check)
# print(two in all)
# print(raunak in all)
# print("sushant" not in all)

hi = 'ayan'
aryan = 'howdy'
sushant = 'k xa khabar?'
all = ['ayan', ' aryan', 'sushant']
print(hi in all)
print('aryan' not in all)   # space inside quotations also matter
c = type(all)
print(c)