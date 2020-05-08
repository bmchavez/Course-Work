import re

# FIND ALL METHOD
phone_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
resume = ''' cell: 508-555-5555, Home: 508-555-1234

random text

random 847-123-4567'''

# RETURNS A LIST OF STRINGS
# print(phone_regex.findall(resume))
mo = phone_regex.findall(resume)
print(mo)


# RETURNS A LIST OF TUPLES OF STRINGS (If the regex exression has groups)
phone_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
mo = phone_regex.findall(resume)
print(mo)
print()

# MAKING YOUR OWN CHARACTER CLASSES USING []
vowel_regex = re.compile(r'[aeiouAEIOU]')
mo = vowel_regex.findall('Robocop eats baby food.')
print(mo)
print()

double_vowel_regex = re.compile(r'[aeiouAEIOU]{2}')  # Two vowels in a row
mo = double_vowel_regex.findall('Robocop eats baby food.')
print(mo)
print()

# NEGATIVE CHARACTER CLASSES WITH ^ (Matches every character that is not in the character class)
vowel_regex = re.compile(r'[^aeiouAEIOU]')
mo = vowel_regex.findall('Robocop eats baby food.')
print(mo)
print()
