function palindrome()
{
    var str=document.getElementById("number").value;
    document.getElementById("answer").innerHTML=checkpalindrome(str);
}

function checkpalindrome(str)
{
    var flag=0;
    var n=str.length;
    for(var i=0;i<n/2;i++)
    {
        if(str.charAt(i)!=str.charAt(n-i-1))
        {
            flag=1;
            break;
        }
    }
    if(flag==1)
        return "false";
    else
        return "true";
}