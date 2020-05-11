import shelve

# You can store variables to binary shelve files for more complex variable
#   like lists and dictionaries

# You can make changes to your shelf file as if it were a dictionary

shelf_file = shelve.open('Section 11: FIles/mydata')
shelf_file['cats'] = ['Zophie', 'Pooka', 'Simon', 'Fat-tail', 'Cleo']
shelf_file.close()

shelf_file = shelve.open('Section 11: FIles/mydata')
print(shelf_file['cats'])
shelf_file.close()
print()

shelf_file = shelve.open('Section 11: FIles/mydata')
print(list(shelf_file.keys()))
print(list(shelf_file.values()))