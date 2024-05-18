function reversenum(N){
    let num=N;
    let reverse=0;
    while(N!==0){
        let digit=N%10;
        reverse = reverse * 10+ digit;
        N=Math.floor(N%10);
    }
    console.log(`the reverse of the${num}is ${reverse}`);
}
const N=454345;
reversenum(N);