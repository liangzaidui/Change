export const low2Up = (tokens: string): string => {
    /**
     * 小写数字转大写
     * @param tokens: 输入的小写数字字符串
     * @return output: 大写数字字符串
     */

    // 字符转数字
    let num: number = Number.parseInt(tokens)
        
    let a1: string[] = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"]
    let a2: string[] = ['拾',"佰","仟"]
    let a3: string[] = ["元","万","亿"]

    let len: number = 0
    let temp: number = num
    for(let j:number = 1;temp > 0;j*=10) {
        temp = temp / 10
        temp = Math.floor(temp)
        len++
    }
    let output: string = ""
    output.concat
    let flag:number = 1; // 记录非零数前是否为零
    for(let i: number = len; i>=1;i--) {
        // 提取各位数字
        let k :number = num/Math.pow(10,i-1)
        k = Math.floor(k % 10)
        if(k==0){
            switch(i){ // 如果此位是零，且在元、万、亿的单位上，则输出对应单位
                case 1: {
                    output = output.concat(a3[0])
                    break;
                }
                case 5: {
                    output = output.concat(a3[1])
                    break;
                }
                case 9: {
                    output = output.concat(a3[2])
                    break;
                }
            }
            flag=0;
        } 
        else{
            if(flag==0) // 若非零数前面是零，则这一个非零数要先输出一个“零”
            output += "零"
            output += a1[k]
            switch(i%4){
                case 0: {
                    output = output.concat(a2[2])
                    break
                }
                case 3: {
                    output = output.concat(a2[1])
                    break
                }
                case 2: {
                    output += a2[0]
                    break
                }
            }
            switch(i){
                case 1: {
                    output+=a3[0]
                    break
                }
                case 5: {
                    output+=a3[1]
                    break
                }
                case 9: {
                    output+=a3[2]
                    break
                }
            }
            flag=1
        }
    }
    output +="整"
    return output
}


export const up2Low = (tokens: string): number => {
    /**
     * 大写数字转小写数字
     * @param tokens: 大写数字字符串
     * @return result: 小写数字
     */
    let cnArr: string[] = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    let chArr1: string[] = ['拾', '佰', '仟'];
    let chArr2: string[] = ['万', '亿'];


    let result: number = 0;
    //存放一个单位的数字如：十万
    let temp1: number = 0;
    let temp: number = 0;
    for (let i: number = 0; i < tokens.length; i++) {
        //判断是否是chArr
        let b: boolean = true;
        let c: string  = tokens.charAt(i);
        //非单位，即数字
        for (let j: number = 0; j < cnArr.length; j++) {
            if (c == cnArr[j]) {
                // 下标+1，就是对应的值
                temp = j + 1;
                b = false;
                break;
            }
        }
        //单位{'拾','佰','仟'}
        if (b) {
            for (let j: number = 0; j < chArr1.length; j++) {
                if (c == chArr1[j]) {
                    switch (j) {
                        case 0:
                            temp *= 10;
                            temp1 += temp;
                            temp=0;
                            break;
                        case 1:
                            temp *= 100;
                            temp1 += temp;
                            temp=0;
                            break;
                        case 2:
                            temp *= 1000;
                            temp1 += temp;
                            temp=0;
                            break;
                        default:
                            break;
                    }
                }
            }
            //('万','亿')
            for (let j: number = 0; j < chArr2.length; j++) {
                if (c == chArr2[j]) {
                    switch (j) {
                        case 0:
                            if (temp1 == 0)
                                result += temp * 10000;
                            else
                                result += (temp1+temp) * 10000;
                            temp1 = 0;
                            temp=0;
                            break;
                        case 1:
                            if (temp1 == 0)
                                result += temp * 100000000;
                            else
                                result += (temp1+temp)* 100000000;
                            temp1 = 0;
                            temp=0;
                            break;
                        default:
                            break;
                    }
                }
            }

        }
        //遍历到最后一个字符
        if (i == tokens.length - 1) {
            result += temp1+temp;
        }
    }
    return result;
}