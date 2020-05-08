import re

# ? = MATCH ZERO OR ONE TIMES

# The following two lines of code complete the same function
# bat_regex = re.compile(r'Batman|Batwoman')
bat_regex = re.compile(r'Bat(wo)?man')
mo = bat_regex.search('The Adventures of Batman')
print(mo.group())
print()

mo = bat_regex.search('The Adventures of Batwoman')
print(mo.group())
print()
print()

phone_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
mo = phone_regex.search('My phone number is 415-555-1234. Call me tomorrow.')
print(mo.group())
print()

# The following regex expressions says that the area code is optional.
# It can apear 1 or zero times.
phone_regex = re.compile(r'(\d\d\d-)?\d\d\d-\d\d\d\d')
mo = phone_regex.search('My phone number is 555-1234. Call me tomorrow.')
print(mo.group())
print('*************************************')


# * = MATCH ZERO OR MORE TIMES (star character)
bat_regex = re.compile(r'Bat(wo)*man')
mo = bat_regex.search('The Adventures of Batman')
print(mo.group())
print()
mo = bat_regex.search('The Adventures of Batwoman')
print(mo.group())
print()
mo = bat_regex.search('The Adventures of Batwowoman')
print(mo.group())
print()
print('*************************************')

#  + = MATCH ONE OR MORE TIMES (the character MUST appear)
bat_regex = re.compile(r'Bat(wo)+man')
mo = bat_regex.search('The Adventures of Batwoman')
print(mo.group())
print()

# ESCAPING
regex = re.compile(r'\+\*\?')
mo = regex.search('I learned about +*? regex syntax')
print(mo.group())
print()

# {X} = MATCH A SPECIFIC NUMBER OF REPETITIONS (exactly x)
ha_regex = re.compile(r'(Ha){3}')
mo = ha_regex.search('He said "HaHaHa"')
print(mo.group())
print()

# longer example of {x}
phone_regex = re.compile(r'((\d\d\d-)?\d\d\d-\d\d\d\d(,)?) {3}')
mo = phone_regex.search(
    'My phone numbers are 847-123-1234')
print(mo.group())
