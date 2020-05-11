import os

# os.walk() - PASS A ROOT FOLDER AND THE FUNCTION WILL WALK THE ENTIRE DIRECTORY TREE
for folder_name, subfolders, file_names in os.walk('Section 11: FIles/34.0 Folder'):
    print('The folder is ' + folder_name)
    print('The subfolders in ' + folder_name + ' are: ' + str(subfolders))
    print('The filenames in ' + folder_name + ' are: ' + str(file_names))
    print()

    for subfolder in subfolders:
        print(subfolder)