import pprint

message = 'It was a bright cold day in April, and the clocks were striking thirteen'
count = {}  # ie:   'r': 12

for character in message.upper():
    count.setdefault(character, 0)
    count[character] += 1

# pprint function pretty prints the dictionary
pprint.pprint(count)
print('****************************************************')
print()

# pformat function pretty prints the dictionary as a string
text = pprint.pformat(count)

print(text)
