import re

phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
# mo is short for match object
mo = phone_num_regex.search('My number is 415-555-4242')
print(mo.group())
print()


# REGEX WITH GROUPS
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
# mo is short for match object
mo = phone_num_regex.search('My number is 415-555-4242')
print(mo.group())
print(mo.group(1))
print(mo.group(2))
print()

# REGEX - escape opening and closing characters with backslash
# (Looking for parenthesis)
phone_num_regex = re.compile(r'(\(\d\d\d\)) (\d\d\d-\d\d\d\d)')
mo = phone_num_regex.search('My number is (415) 555-4242')
print(mo.group())
print(mo.group(1))
print(mo.group(2))
print()


# Pipe is an or statement
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')
print(mo.group())
print()

# If your regex does not find anything it will return none
