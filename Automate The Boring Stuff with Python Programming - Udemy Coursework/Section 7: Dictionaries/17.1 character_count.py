message = 'It was a bright cold day in April, and the clocks were striking thirteen'
count = {}  # ie:   'r': 12

for character in message.upper():
    count.setdefault(character, 0)
    count[character] += 1

print(count)
