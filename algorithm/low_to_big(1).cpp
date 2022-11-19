#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
 
void moneychange(int m)
{
    char a1[][3] = {"零","壹","贰","叁","肆","伍","陆","柒","捌","玖"};
    char a2[][3] = {"拾","佰","仟"};
    char a3[][3] = {"元","万","亿"};
 
    printf("the Chinese form is:");
 
    //先处理整数部分
    int len=0;
    int t=m;
    for(int j=1;t>0;j*=10){
    	t=t/10;
    	len++;
	}
    int flag=1;//记录非零数前是否是零
    for(int i=len;i>=1;i--)
    {
        //提取各位数字
        int k;
		k=m/pow(10,i-1);
        k=k%10;
        if(k==0)
        {
            switch(i)//如果此位是零，且在元、万、亿的单位上，则输出对应单位
                {
                    case 1:printf("%s",a3[0]);break;
                    case 5:printf("%s",a3[1]);break;
                    case 9:printf("%s",a3[2]);break;
                }
            flag=0;
        }
        else
        {
            if(flag==0 )//若非零数前面是零，则这一个非零数要先输出一个“零”
                printf("零");
            printf("%s",a1[k]);//输出对应中文数字
            switch(i%4)//检测此数字在哪个位置，在对应的十百千的位上要带上十百千
                {
                    case 0 :printf("%s",a2[2]);break;
                    case 3 :printf("%s",a2[1]);break;
                    case 2 :printf("%s",a2[0]);break;
                }
            switch(i)//元万亿上则带上元万亿
                {
                    case 1:printf("%s",a3[0]);break;
                    case 5:printf("%s",a3[1]);break;
                    case 9:printf("%s",a3[2]);break;
                }
            flag=1;
        }
    }
 

        printf("整");
 
 
}
 
int main()
{
    double m;
    printf("please input the price:");
    scanf("%lf",&m);
    moneychange(m);
    return 0;
}
