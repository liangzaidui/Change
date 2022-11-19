import java.util.*;


public class xi {
    public static long li(String chineseNum) {
        char[] cnArr = new char[]{'壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'};
        char[] chArr1 = new char[]{'拾', '佰', '仟'};
        char[] chArr2 = new char[]{'万', '亿'};
        String allChineseNum = "零壹贰叁肆伍陆柒捌玖拾佰仟万亿";


        long  result = 0;
        //存放一个单位的数字如：十万
        long temp1 = 0;
        long temp = 0;
        for (int i = 0; i < chineseNum.length(); i++) {
            //判断是否是chArr
            boolean b = true;
            char c = chineseNum.charAt(i);
            //非单位，即数字
            for (int j = 0; j < cnArr.length; j++) {
                if (c == cnArr[j]) {
                    // 下标+1，就是对应的值
                    temp = j + 1;
                    b = false;
                    break;
                }
            }
            //单位{'拾','佰','仟'}
            if (b) {
                for (int j = 0; j < chArr1.length; j++) {
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
                for (int j = 0; j < chArr2.length; j++) {
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
            if (i == chineseNum.length() - 1) {
                result += temp1+temp;
            }
        }
        return result;
    }

    

}