function nato()
{
    
var m=Number(document.getElementById("number").value);
var n=parseInt(m);
document.getElementById("answer").innerHTML= six(n);
}
var input=[1,4,3,5,4,6,7,8,3];
function six(n){
    
    var result = [];
    var a;
    var b;

    for (var i=0; i < n.length; i++) {

        a = n[i];

        for (var j=0; j < n.length; j++) {

            b = n[j];

            if ( (parseInt(a) + parseInt(b)) === 8 && result.indexOf(a+","+b) == -1 && result.indexOf(b+","+a ) == -1 ) {
               result.push( a+","+b );
            }

        }    
    }

    for (var i=0; i < result.length; i++) {
        result[i] = result[i].split(',')
    }

    return result;
} 

six(input);