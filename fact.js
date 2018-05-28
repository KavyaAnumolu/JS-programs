var i,n;
function facto()
{
    
n=Number(document.getElementById("number").value);
i=parseInt(n);
document.getElementById("answer").innerHTML= fa(i);
}
function fa(i)
{
    if(i==0||i==1)
return 1;
    else
 return i*fa(i-1);    

}
