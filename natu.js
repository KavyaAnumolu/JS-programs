function nato()
{
    
var m=Number(document.getElementById("number").value);
var n=parseInt(m);
document.getElementById("answer").innerHTML= nat(n);
}


function nat(n)
{
    var sum=0;
   // var n = prompt("Enter the number of your choice!!");
if(n === "10"){
console.log("ok");
}
if(n <= 1){
console.log("Enter a positive number greater than 1!!");
}
while(n > 0) {
    sum = sum + n;
    n= n - 1;
    }

console.log(" The sum of the numbers up to the given number is equal to:" + sum);
}

