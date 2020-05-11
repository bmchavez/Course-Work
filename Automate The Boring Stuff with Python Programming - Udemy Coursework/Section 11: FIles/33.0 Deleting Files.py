import os

# os.unlink() - PERMANANTLY DELETES A SINGLE FILE
os.unlink('bacon1.txt')

# os.rmdir() - PERMANANTLY DELETES AN EMPTY FOLDER 
os.rmdir('file_path')

# TO DELETE A FOLDER AND ALL OF ITS CONTENT
import shutil

shutil.rmtree('/home/ben/code/Courses/Automate The Boring Stuff with Python Programming - Udemy Coursework/Section 11: FIles/deleting')

