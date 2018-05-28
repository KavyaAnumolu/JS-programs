function nato()
{
    
var m=Number(document.getElementById("number").value);
var n=parseInt(m);
document.getElementById("answer").innerHTML= close(n);
}
function close(n)
{
    var res=1,count=0;
    var b=power_of_2(n);
    if(b==0)
    {
        while(res<=(n-1)/2)
        {
            res=res*2;
            count++;
        }
        return count;
    }
    else 
    return b;
}
function power_of_2(n) 
{
    var i=0;
    //var power=1;
    while( n !=1) 
    {
        if(n%2!=0)
        return 0;
        n=n/2;
        i++;
    }
        return i;
            }
   
      
   
  