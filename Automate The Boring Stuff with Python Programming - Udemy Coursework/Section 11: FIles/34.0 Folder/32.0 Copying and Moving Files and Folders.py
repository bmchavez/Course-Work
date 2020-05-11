import shutil
# SHELL UTILITIES MODULE

# TO COPY A FILE INTO A NEW LOCATION
shutil.copy('file_path1', 'new_file_path')

# TO COPY A FILE INTO A NEW LOCATION AND RENAME ITt
shutil.copy('file_path1', 'new_file_path/new_file_name.txt')

# TO COPY AN ENTIRE FOLDER USE copytree() METHOD
shutil.copytree('directory_name', 'backup/new_directory_name')

# TO MOVE AN ENTIRE FOLDER USE .move() METHOD
shutil.move('directory_name', 'backup/new_directory_name')

# IN ORDER TO RENAME A FILE, JUST USE THE MOVE FUNCTION
#   BUT USE THE SAME FOLDER AS THE DESTINATION FILE

