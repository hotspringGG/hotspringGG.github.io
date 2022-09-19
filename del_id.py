import os
f = open("nav.json","r")
lines = f.readlines()
result = ""
for i in lines:
    if "_id" not in i:
        result += i
print(result)
f2 = open("nav.json","w")
f2.write(result)
        