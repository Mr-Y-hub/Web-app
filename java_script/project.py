import zipp

# def int_to_string(number):
#     result = ""
#     for elem in number:
#         result += chr(97 + elem)
#     return result


def rev_string_to_int(number):
    result = ""
    for num1,num2 in zip(number[0::2], number[1::2]):
        result += (chr((num1 * 26) + num2))
    return result

def rev_int_to_string(text):
    result = []
    for elem in text:
        result.append(ord(elem) - 97)
    return result

print(rev_string_to_int(rev_int_to_string(rev_string_to_int(rev_int_to_string('dxeedxebdwemdwesdxdtdweqdxefdxefdxdudueqduerdvdtdvdu')))))
