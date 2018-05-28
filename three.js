function nato()
{
    
var m=Number(document.getElementById("number").value);
var n=parseInt(m);
document.getElementById("answer").innerHTML= nat(n);
}


function nat(n)
{
    var sum = 0;
for (var i = 0; i < n; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log('Sum: %d', sum);

}

