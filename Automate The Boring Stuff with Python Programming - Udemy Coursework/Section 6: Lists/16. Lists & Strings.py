# Slicing
import copy
name = 'Zophie a cat'
newName = name[0:7] + 'the' + name[8:]
print(newName)


# Mutable vs. Immutable
def eggs(someParameter):
    someParameter.append('Hello')


spam = [1, 2, 3]
eggs(spam)

print(spam)
print()
# The copy.deepcopy() function
spam = ['A', 'B', 'C', 'D']
cheese = copy.deepcopy(spam)
print(id(cheese))
print(id(spam))

print()
# Line Continuation
spam = ['apples',
        'oranges',
        'bananas',
        'cats']
