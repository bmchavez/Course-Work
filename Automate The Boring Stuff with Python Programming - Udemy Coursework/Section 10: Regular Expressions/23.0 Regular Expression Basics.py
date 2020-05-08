import re

msg = 'Call me 415-555-1011 tomorrow, or at 415-555-9999'

phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
print(phone_num_regex.findall(msg))
