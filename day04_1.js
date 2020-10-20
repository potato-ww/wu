const xf=[]//小费数组
const allSum=[]//总共金额
function num(a,b,c){
    for(let i=0;i<arguments.length;i++){
        let sum=0;//总共的钱
        let xfSum=0;//小费
        if(arguments[i]<50){
            xfSum=arguments[i]*0.2;//给的小费
            sum=arguments[i]+xfSum;//总共的钱
            xf[i]=xfSum;
            allSum[i]=sum;
        }else if(arguments[i]>50&&arguments[i]<200){
            xfSum=arguments[i]*0.15;//给的小费
            sum=arguments[i]+xfSum;//总共的钱
            xf[i]=xfSum;
            allSum[i]=sum;
        }else{
            xfSum=arguments[i]*0.1;//给的小费
            sum=arguments[i]+xfSum;//总共的钱
            xf[i]=xfSum;
            allSum[i]=sum;
        }
    }
}
num(124,48,268);
console.log("小费组：")
console.log(xf)
console.log("支付金额：")
console.log(allSum)