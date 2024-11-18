n=+prompt("enter a number:")
a=0,b=1,sum=0,res=""
for(i=1;i<=n;i++){
    if(i!=n){
        res+=a+"+"
    }
    else{
        res+=a+"="
    }
    sum+=a
    c=a+b
    a=b
    b=c
}
console.log(res+sum)
num=prompt("enter a number:")
sum=0
for(i of num){
    a=0,b=1
    while(a<i){
        let c=a+b;
    a=b;
    b=c
    if(a==i){
        sum+=Number(i)
        break
    }
    }
}
console.log(sum)

num=prompt()
i=0,sum=0
roman={"I":1,"V":5,"X":10,"C":100,"L":50,"D":500,"M":1000}
while(i<num.length){
    X=num[i]
    Y=num[i+1]
    if(i!=num.length-1){
        if(roman[X]>=roman[Y]){
            sum=sum+roman[X]
        }
        else{
            sum+=roman[Y]-roman[X]
            i++
        }
    }
    else{
        sum+=roman[X]
    }
    i++
}
console.log(sum)