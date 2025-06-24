function genTicket(n){
    let arr = new Array(n);
    for(let i = 0; i < arr.length; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function getSum(arr){
    let n = arr.length;
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

export {genTicket, getSum};