function Fibonacci(n)
{
    // write code here
    if(n==0){
        return 0;
    }
    if(n==1 || n==2){
        return 1
    }
    let arr = [1,1];
    for(let index = 0;index<n;index++){
        if(index > 2){
            let n1 = arr[index-1];
            let n2 = arr[index-2];
            arr.push(n1+n2);
        }
        
        
    }
    let result;
    result = arr[n-2] + arr[n-3];
    return result;
}
Fibonacci(3);