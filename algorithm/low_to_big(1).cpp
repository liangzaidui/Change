#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
 
void moneychange(int m)
{
    char a1[][3] = {"��","Ҽ","��","��","��","��","½","��","��","��"};
    char a2[][3] = {"ʰ","��","Ǫ"};
    char a3[][3] = {"Ԫ","��","��"};
 
    printf("the Chinese form is:");
 
    //�ȴ�����������
    int len=0;
    int t=m;
    for(int j=1;t>0;j*=10){
    	t=t/10;
    	len++;
	}
    int flag=1;//��¼������ǰ�Ƿ�����
    for(int i=len;i>=1;i--)
    {
        //��ȡ��λ����
        int k;
		k=m/pow(10,i-1);
        k=k%10;
        if(k==0)
        {
            switch(i)//�����λ���㣬����Ԫ�����ڵĵ�λ�ϣ��������Ӧ��λ
                {
                    case 1:printf("%s",a3[0]);break;
                    case 5:printf("%s",a3[1]);break;
                    case 9:printf("%s",a3[2]);break;
                }
            flag=0;
        }
        else
        {
            if(flag==0 )//��������ǰ�����㣬����һ��������Ҫ�����һ�����㡱
                printf("��");
            printf("%s",a1[k]);//�����Ӧ��������
            switch(i%4)//�����������ĸ�λ�ã��ڶ�Ӧ��ʮ��ǧ��λ��Ҫ����ʮ��ǧ
                {
                    case 0 :printf("%s",a2[2]);break;
                    case 3 :printf("%s",a2[1]);break;
                    case 2 :printf("%s",a2[0]);break;
                }
            switch(i)//Ԫ�����������Ԫ����
                {
                    case 1:printf("%s",a3[0]);break;
                    case 5:printf("%s",a3[1]);break;
                    case 9:printf("%s",a3[2]);break;
                }
            flag=1;
        }
    }
 

        printf("��");
 
 
}
 
int main()
{
    double m;
    printf("please input the price:");
    scanf("%lf",&m);
    moneychange(m);
    return 0;
}
