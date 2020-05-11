import os

# OS.PATH.JOIN METHOD CREATES FILE PATH THAT IS APPROPRIATE FOR CURRENT
#   OPERATING SYSTEM
my_file_path = os.path.join('folder1', 'folder2', 'folder3')
print(my_file_path)
print()

print(os.sep)   #This os where the file path indicator is stored
print()

# TO GET CURRENT WORKING DIRECTORY AS A STRING VALUE
current_working_directory = os.getcwd()
print(current_working_directory)
print()

# TO CHANGE THE CURRENT WORKING DIRECTORY USE os.chdir() method
os.chdir('/')
current_working_directory = os.getcwd()
print(current_working_directory)
os.chdir('/home/ben/code/Courses/Automate The Boring Stuff with Python Programming - Udemy Coursework')
current_working_directory = os.getcwd()
print()

# OS.PATH.ABSPATH() - Returns the absolute path of the relative file you pass it


# OS.PATH.ISABS() - Returns True or False depending on whether file path that is passed
#   is the absolute path or not. True if it is.

# OS.PATH.RELPATH() - Returns the relative path of the two file paths that you pass it
print(os.path.relpath('/path1', '/path2'))
print()

# os.path.dirname() - retreives the directory part of a file path
print(os.path.dirname('/folder1/folder2/spam.png'))
print()

# os.path.basename() - retreives the last part of the file path (file or folder)
print(os.path.basename('/folder1/folder2/spam.png'))
print()

# os.path.exists() - CHECKS TO SEE IF A FILE PATH EXISTS - RETURNS BOOLEAN
print(os.path.exists('/folder1/folder2/spam.png'))
print()

# os.path.isfile() - CHECKS TO SEE IF THE TARGET IS A FILE - RETURNS BOOLEAN
print(os.path.exists('/folder1/folder2/spam.png'))
print()

# os.path.isdir() - CHECKS TO SEE IF THE TARGET IS A DIRECTORY/FOLDER- RETURNS BOOLEAN
print(os.path.isdir('/folder1/folder2/spam.png'))
print()

# os.path.getsize() - PASS THE LOCATION OF A FILE. FUNCTION RETURNS THE SIZE IN BITES AS AN INTEGER
print(os.path.getsize(r'/home/ben/code/Courses/Automate The Boring Stuff with Python Programming - Udemy Coursework/Section 11: FIles/30.0 Filenames and Absolute/30.0 Filenames and Absolute-Relative File Paths.py'))
print()

# os.listdir() - Returns the contents of the passed folder. Like 'ls' on cmd line
print(os.listdir(r'/home/ben/code/Courses'))
print()

# os.makedirs() - CREATES NEW DIRECTORIES/FOLDERS
os.makedirs(r'/home/ben/code/Courses/Automate The Boring Stuff with Python Programming - Udemy Coursework/Section 11: FIles/delicious/walnut/waffles')
print()