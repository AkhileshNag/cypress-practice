const flag =true
//if condition
if(!flag){
    console.log("Condition is satisfied")
} else{
    console.log("Condition is not satisfied")
    console.log(flag)
}
//while
let i=0;
while(i<10){
    i++ //i=i+1
    console.log(i)
}
// do while
do{
    console.log("inside do while-->"+i)
}while(i>10);
console.log(i)
//for loop
let n=0
for(let k=1;k<=100;k++){
    if(k%2 ==0 && k%5==0){
        console.log("common multiples of 2 and 5-->"+k)
        n++
        if(n == 3){
            break
        }
    }
    
}