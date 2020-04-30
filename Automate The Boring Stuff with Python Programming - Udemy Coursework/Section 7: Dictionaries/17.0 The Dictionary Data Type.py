# DICTIONARY METHODS
my_dict = {'name': 'Zophie', 'species': 'cat', 'age': 2}

# keys() Dictionary Method
print(my_dict.keys())
print()
print(list(my_dict.keys()))
print()
print('****************************************************')


# Values() Dictionary Method
print(my_dict.values())
print()
print('****************************************************')

# items() Dictionarys Method
print(my_dict.items())
print()
print('****************************************************')

for k in my_dict.keys():
    print(k)
print()
print('****************************************************')

for k, v in my_dict.items():
    print(k, v)
print()
print('****************************************************')

print('cat' in my_dict.values())
print()
print('****************************************************')


# get() Dictionarys Method (Return value for key 'age' else return o)
# The get method is good for searching the dictionary. If you use my_dict['age'], but
# age doesn't exist, then you will get an error.
print(my_dict.get('age', 0))
print()
print('****************************************************')

# set defult method - Sets a new key value pair if the key does not exist.
# if the key does exist the method will not do anything.
my_dict = {'name': 'Zophie', 'species': 'cat', 'age': 2}
my_dict.setdefault('color', 'black')
print(my_dict)
