import os

# os.walk() - PASS A ROOT FOLDER
for folder_name, subfolders, file_names in os.walk('file_path'):
    print('The folder is ' + folder_name)
    print('The subfolders in ' folder_name + 'are: ' str(subfolders))
    print('The filenames in ' folder_name + 'are: ' str(filenames))
    print()