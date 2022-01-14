import zipp
number = [4,11,4,8,3,19,3,25,4,0,3,23,4,12,4,12,4,1,1,23,1,24,2,0,2,1]
result = ""
for num1,num2 in zip(number[0::2], number[1::2]):
    print(num1,num2)
    result += (chr((num1 * 26) + num2))
print(result)