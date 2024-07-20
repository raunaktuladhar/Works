# Dictionary means mapping i.e. it will always come in key value pair

# player = {'first_name':'lionel', 'last_name':'messi', 'age':'36', 'height':5.7} 
# print(players.keys())          # only return the keys from the dictionary
# print(players.values())        # only returns the values from the dictionary
# print(players['first_name'])   # used to print the value of the key 'first name' i.e. lionel
# print(players['last_name'])    # used to print only the value of the key 'last name' i.e. messi

# players = {'first_name':'lionel', 'last_name':'messi', 'age':'36', 'height':5.7, 'associates':['Argentina', 'Barcelona', 'PSG']}
# # matrix bhitrw matrix
# print(players['associates']) 
# print(players['associates'][0])
# print(players['associates'][-1])
# print(players['associates'][-2])


# creating new dictionary

# d = {}
# print(d)
# print(type(d))
# d['name'] = 'Prabhat'
# d['age'] = 25
# print(d)  # dictionary print hunxw

# dictionary methods

# keys() -> it will print only the keys of the dictionary as a list
# print(players.keys())

# values() -> it will print only the values of the dictionary as a list
# print(players.values())

# items() -> it will print tuples of all items
# print(players.items())

# nesting with dictionary -> dictionary bhitrw arko dictionary

# test = {'key1':{'nestkey':{'subnestkey':'hello'}}}
# print(test['key1']['nestkey']['subnestkey'])    # returns hello
# print(test['key1']['nestkey'])                  # returns {'subnestkey':'hello'}
# print(test['key1'])                             # returns {'nestkey': {'subnestkey': 'hello'}}
# print(test.values())
# player['award'] = 235
# print(player)

# ronaldo = {'raunak':'tuladhar', 'umang':'khanal', 'keshar':'badam'}
# print(type(ronaldo))       # class type
# print('raunak')            # raunak print hunxw
# print(ronaldo['raunak'])   # only square/big bracket

# dict2={
#     'raunak':'tuladhar',
#     'rajesh':'niure',
#     'raju':'lopchan',
#     'players':['benzema', 'bale', 'cristiano']
# }

# print(dict2)  # returns info of dict2 inside curly bracket

# dict={}
# print(dict)
# print(type(dict))

# dict['sushant'] = 'kunwar'
# dict['aayan'] = 'jindal'
# print(dict)

# nested dictionary

# mydictionary = {'hi':{'I am Zlatan':{'who':'the hell are you?'}}}
mydictionary = {'hi':{'I am Zlatan':{'who':'the hell are you?'}}, 'howdy':'no response'}

print(mydictionary)

if 'Zlatan' in mydictionary:
    print("yes he is there")

else:
    print("no")

for x in mydictionary:
    # print(x)  # only returns hi in ln 71
    # print(x)    # returns returns hi and howdy
    print(x, end=" messi ")