import traceback

# The traceback,format_exc() Function
try:
    raise Exception('This is the error message.')
except:
    error_file = open('Section 12: Debugging/error_log.txt', 'a')
    error_file.write(traceback.format_exc())
    error_file.close()
    print('The traceback info was written to error log.txt')

