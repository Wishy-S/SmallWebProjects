var num = Number(document.getElementById('number').innerHTML);
function increment(){ 
    num++;
    document.getElementById('number').innerHTML = num;
}
function decrement(){
    num--;
    document.getElementById('number').innerHTML = num;
}
function neutral(){
    num = 0;
    document.getElementById('number').innerHTML = num;
}
console.log(num);
