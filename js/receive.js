const parameters = location.search.substring(1).split("&");
console.log(parameters)
let data = "";

for (x in parameters)
{
    let temp = parameters[x].split("=");
    thevar = unescape(temp[0]);
    thevar = thevar.replace("-", " ");
    thevalue = unescape(temp[1]);
    thevalue = thevalue.replace("+", " ");
    data += thevar + " : " + thevalue + "<br>";
}

document.getElementById("data").innerHTML = data;
