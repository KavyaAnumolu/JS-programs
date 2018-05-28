
function fizz()
{
    
var m=Number(document.getElementById("number").value);
var n=parseInt(m);
document.getElementById("answer").innerHTML= fiz(n);
}


function fiz(n)
{
    var i,j;
    var arr=[];
    for(i=1,j=0;i<=n;i++,j++)
    {
    if(i%3===0)
       arr[j]="FIZZ";
    else if (i%5===0)
       arr[j]="BUZZ";
    else if(i%3===0 && i%5===0)
       arr[j]="FIZZBUZZ";
    else
       arr[j]=i;
    }
   return arr;
}


