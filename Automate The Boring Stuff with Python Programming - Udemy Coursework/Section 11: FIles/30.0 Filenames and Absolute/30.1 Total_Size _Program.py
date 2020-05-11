import os

total_size = 0
for filename in os.listdir(r'/home/ben/code/Courses'):
    if not os.path.isfile(os.path.join(r'/home/ben/code/Courses', filename)):
        continue
    total_size = total_size + os.path.getsize(os.path.join(r'/home/ben/code/Courses', filename))

print(total_size)