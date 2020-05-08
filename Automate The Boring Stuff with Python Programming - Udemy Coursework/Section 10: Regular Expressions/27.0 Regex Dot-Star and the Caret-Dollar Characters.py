import re

# USING ^ TO INDICATE TEXT PATTERN MUST OCCUR AT THE BEGINNING OF STRING
begins_with_hello_regex = re.compile(r'^Hello')
mo = begins_with_hello_regex.search('Hello there!')
print(mo)
print()

mo = begins_with_hello_regex.search('He said "Hello!"')
print(mo)
print()


# USING $ TO INDICATE TEXT PATTERN MUST OCCUR AT THE END OF STRING
ends_with_world_regex = re.compile(r'world!$')
mo = ends_with_world_regex.search('Hello world!')
print(mo)
print()


# TO SAY THAT THE STRING MUST MATCH THE ENTIRE PATTERN USE BOTH ^ AND $
all_digits_regex = re.compile(r'^\d+$')
mo = all_digits_regex.search('3471837410')
print(mo)
print()

all_digits_regex = re.compile(r'^\d+$')
mo = all_digits_regex.search('3471LLLL837410')
print(mo)
print()


# WILDCARD "." CHARACTER - MEANS ANY CHARACTER EXCEPT NEW LINE
at_regex = re.compile(r'.at')  # anything followed by "at"
mo = at_regex.findall('the cat in the hat sat on the flat mat')
# print(mo)
print()


at_regex = re.compile(r'.{1,2}at')  # anything followed by "at"
mo = at_regex.findall('the cat in the hat sat on the flat mat')
print(mo)
print()

name_regex = re.compile(
    r'First Name: (.*) Last Name: (.*)')  # anything followed by "at"
mo = name_regex.findall('First Name: Al Last Name: Sweigart')
print(mo)
print()

# (.*) is greedy
# (.*?) is non-greedy


serve = '<To serve humans> for dinner.>'

nongreedy = re.compile(r'<(.*?)>')
mo = nongreedy.findall(serve)
print(mo)
print()

nongreedy = re.compile(r'<(.*)>')
mo = nongreedy.findall(serve)
print(mo)
print()


# MAKING DOT MATCH NEWLINES TOO (with re.DOTALL)
prime = 'Serve the public trust.\nProtect the innocent.\nUphold the law.'
print(prime)
print()


dot_star = re.compile(r'.*', re.DOTALL)
mo = dot_star.search(prime)
print(mo)


# re.IGNORECASE
vowel_regex = re.compile(r'[aeiou]', re.IGNORECASE)  # or you could use re.I
mo = vowel_regex.findall(
    'Al, why does your programming book talk about RoboCop so much?')
print(mo)
