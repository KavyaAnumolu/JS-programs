function nato()
{
    
var m=Number(document.getElementById("number").value);
var n=parseInt(m);
document.getElementById("answer").innerHTML= rep(n);
}
function rep(arr) {
    var i,
    len=arr.length,
    result = [],
    obj = {}; 
    for (i=0; i<len; i++)
    {
    obj[arr[i]]=0;
    }
    for (i in obj) {
    result.push(i);
    }
    return result;
    }
  var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
  console.log(rep(arr));