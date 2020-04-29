print('How many cats do you have?')
numCats = input()
try:
    if int(numCats) >= 4:
        print('That is a lot of cats.')
    elif int(numCats) < 0:
        print('Error: You cannot have negative cats.')
    else:
        print('That is not that many cats.')
except ValueError:
    print('Error: You did not enter a number')
