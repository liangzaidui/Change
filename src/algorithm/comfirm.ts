export const judge = (tokens: string): string => {
    /**
     * 判断输入是否合法
     * @param tokens: 输入的字符串
     * @return 提示语句，如果输入正确会返回输入正确，如果输入错误会返回错误的原因
     */

    // 判断输入是否为空
    if (tokens.length == 0) {
        return "输入为空"
    }
    // 判断是否输入非法字符
    let tokenRe: string = "[^0-9零壹贰叁肆伍陆柒捌玖拾佰仟万亿元整]"
    if (tokens.search(tokenRe) != -1) {
        // tokens.search(tokenRe)
        return "输入的字符不正确"
    }

    // 判断是否全为大写或全为小写且长度合法
    let lowRe: string = "\\d"
    let upRe: string = "[零壹贰叁肆伍陆柒捌玖拾佰仟万亿元整]"
    let upFlag: boolean = false
    let lowFlag: boolean = false
    if (tokens.search(lowRe) != -1) {
        lowFlag = true
    }
    if (tokens.search(upRe) != -1) {
        upFlag = true
    }
    if (upFlag == true && lowFlag == true) {
        return "混合输入大写和小写数字"
    }
    else if (upFlag) {
        if (tokens.length > 25) {
            return "输入的大写数字长度大于25"
        }
        // 判断大写数字语法逻辑是否正确
        let validInfo: string = isValidUpNum(tokens)
        if (validInfo != "合法"){
            return validInfo
        }
    }
    else if (lowFlag) {
        if (tokens.length > 12){
            return "输入的小写数字长度大于12"
        }
        if (tokens[0] == "0") {
            return "小写数字的首位为0"
        }
    }
    return "输入正确"
}

const isValidUpNum = (upNum: string): string => {
    /**
     * 判断大写数字是否合法
     * @prama upNum : 大写数字字符串
     * @return 提示语句，如果合法则返回合法，如果不合法则返回不合法的原因
     */
    if (! upNum.endsWith("元整")) {
        return "没有“元整”结尾"
    }
    let  units: string[] = ["亿","万","仟","佰","拾"] 
    for (let i:number = 0; i < units.length - 1; i++) {
        for (let j:number = i+1; j < units.length; j++) {
            let invalidToken: string = units[i] + units[j]
            if (upNum.search(invalidToken) != -1) {
                return invalidToken+"不合语法"
            } 
        }
    }
    
    return "合法"
}