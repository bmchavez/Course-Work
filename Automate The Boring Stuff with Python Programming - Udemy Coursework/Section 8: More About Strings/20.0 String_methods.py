# STRING METHODS (strings are immutable)
my_string = 'Hello world'
print(my_string.islower())

my_string = 'hello world'
print(my_string.islower())

my_string = 'HELLO WORLD'
print(my_string.isupper())
print()
print('**********************************************')


# isalpha() - letters only

# isalnum() - letters and numbers only
print('hello 123'.isalnum())
print()
print('**********************************************')

# isdecimal() - numbers only

# isspace() - whitespace only

# istitle() - titlecase only

# starteswith()

# endswith()

# join() method
print(', '.join(['cats', 'rats', 'bats']))
print()
print('**********************************************')

# split() method
print('My name is Simon'.split('n'))
print()
print('**********************************************')

# ljust() - left justify method
print('Hello'.ljust(10))
print()
print('**********************************************')

# rjust() - right justify method
print('Hello'.rjust(10))
print()
print('**********************************************')

# center() - right justify method
print('Hello'.center(45, '='))
print()
print('**********************************************')

# strip()
my_string = '      0         Hello World   1       '
print(my_string.strip())
print()
print('**********************************************')

# rstrip() - right strip
my_string = '      0         Hello World   1       '
print(my_string.rstrip())
print()
print('**********************************************')

# lstrip() - left strip
my_string = '      0         Hello World   1       '
print(my_string.lstrip())
print()
print('**********************************************')

#  replace() - string method
my_string = 'Hello There!'
print(my_string.replace('e', 'E'))
print()
print('**********************************************')
