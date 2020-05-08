#! /usr/bin/python3

import re
import pyperclip

# Create a regex for phone numbers
phone_regex = re.compile(r'''
# 415-555-0000, 555-0000, (415) 555-0000, 555-0000 ext 12345, ext., x12345

(
((\d\d\d) | (\(\d\d\d\)))?      # area code (optional)
(\s | -)                        # separator
\d\d\d                          # first 3 digits
-                               # separator
\d\d\d\d                          # last 4 digits
(((ext(\.)?\s)|x)               # extension word-part (optional)
 (\d{2,5}))?                   # extension number-part (optional)
)
''', re.VERBOSE)

# TODO: Create a regex for email addresses
email_regex = re.compile(r'''
# some.+_thing@something.com

[a-zA-Z0-9_.+]+                 # name part
@                               # @ symbol
[a-zA-Z0-9_.+]+                 # .domain name part
''', re.VERBOSE)

# TODO: Get the text off of the clipboard
text = pyperclip.paste()

# TODO: Extract the email/phone numbers from this text 
extracted_phone = phone_regex.findall(text)       # will return a list of strings
extracted_email = email_regex.findall(text)       # will return a list of strings

all_phone_numbers = []
for phone_number in extracted_phone:
    all_phone_numbers.append(phone_number[0])

# TODO: Copy the extracted email/phone to the clipboard
results = '\n'.join(all_phone_numbers) + '\n' + '\n'.join(extracted_email)
pyperclip.copy(results)