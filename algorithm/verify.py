def judge():
    number = input("请只能输入数字（小写或者大写数字）:")
    if len(number)>=13:
        return  0
    arr = [x for x in str(number)]
    flag = 0
    if str(number).isdigit():
         flag =1
    uppercase_digit=('零','壹','贰','叁','肆','伍','陆','柒','捌','玖','拾','元','整','万','仟','佰','亿')
    flag1 = 2
    for i in range(len(arr)):
        temp = 0
        for j in range(len(uppercase_digit)):
            if arr[i] == uppercase_digit[j]:
                temp = 1
        if temp ==0:
            flag1 = 0
            break
    result = flag+flag1
    return  result

result = judge()
print(result)
