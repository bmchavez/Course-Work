import re

names_regex = re.compile(r'Agent \w+')
mo = names_regex.findall('Agent Alice gave the secret documents to Agent Bob.')
print(mo)
print()


# SUB() METHOD - FIND AND SUBSTITUTE
mo = names_regex.sub(
    'REDACTED', 'Agent Alice gave the secret documents to Agent Bob.')
print(mo)
print()

# Find and replace, part but not all of the match object
names_regex = re.compile(r'Agent (\w)\w*')
mo = names_regex.sub(
    r'Agent \1****', 'Agent Alice gave the secret documents to Agent Bob.')
print(mo)
print()

# VERBOSE MODE WITH re.VERBOSE - space characters won't be part of the pattern
re.compile(r'''
(\d\d\d-) |      # Area code
(\(\d\d\d\))    # -or- are code with parens and no dash
-               # First dash
\d\d\d          # First 3 digits
-               # Second dash
\d\d\d\d        # last 4 digits 
\sx\d{2,4}      # extension, like x1234 ''', re.VERBOSE)


# USING MULTIPLE OPTIONS - just works for this purpose. Nowhere else in python.
(r'', re.IGNORECASE | re.DOTALL | re.VERBOSE)
