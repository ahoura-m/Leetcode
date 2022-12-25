import os

for i in range(9,60):
    d = str(i) + ' days ago'
    with open("file.txt", 'a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="' + d + '" -m "Update LeetCode"')