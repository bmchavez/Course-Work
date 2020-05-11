import os

# Reading and writing Plaintext and Binary Files

# THREE STEPS TO READING AND WRITING FILES 
#   1) The open() function
hello_file = open(r'./Section 11: FIles/hello.txt')  #This opens the file in read mode
file_contents = hello_file.read()
hello_file.close()
print(file_contents)
print()

# readlines() METHOD - Returns a list of strings. Each line is a string item
hello_file = open(r'./Section 11: FIles/hello.txt')  #This opens the file in read mode
file_contents = hello_file.readlines()
hello_file.close()
print(file_contents)
print()

# WRITE MODE - pass 'w' / OR APPEND MODE - pass 'a'
#   IF THIS FILE DOES NOT EXIST PYTHON WILL CREATE A NEW FILE 
#   WRITE MODE OVERWRITES THE FILE. APPEND MODE ADDS TO IS.
hello_file = open(r'./Section 11: FIles/hello2.txt', 'w')
hello_file.write('Hello!2222222222')
hello_file.write('Hello!2222222222')
hello_file.write('Hello!2222222222')
hello_file.close()
print()

bacon_file = open('Section 11: FIles/bacon.txt', 'w')
bacon_file.write('Bacon is not a vegetable.')
bacon_file.close()

bacon_file = open('Section 11: FIles/bacon.txt', 'a')
bacon_file.write('\n\nappend-mode: Bacon is delicious!')
bacon_file.close()
