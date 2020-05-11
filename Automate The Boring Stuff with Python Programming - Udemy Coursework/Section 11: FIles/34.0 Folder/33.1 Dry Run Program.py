import os

os.chdir('/home/ben/code/Courses/Automate The Boring Stuff with Python Programming - Udemy Coursework/Section 11: FIles')

# A DRY RUN TESTS YOUR CODE BY COMMENTING OUT ANY LINE WHERE YOU
#   WOULD HAVE DELETED SOMETHING AND INSTEAD, PRINTS THAT
#   FILE PATH INSTEAD

for filename in os.listdir():
    if filename.endswith('.txt'):
        # os.unlink(filename)
        print(filename)