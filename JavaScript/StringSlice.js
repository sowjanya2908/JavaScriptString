document.getElementById("btnSlice").addEventListener("click", function() {
    debugger;
    var name= document.getElementById("txtName").value;
    var startNumber = document.getElementById("txtStartNumber").value;
    var endNumber = document.getElementById("txtEndNumber").value;
document.getElementById("pResult").innerHTML=name.slice(startNumber,endNumber);


// s   o  w  j    i 
//  0  1  2   3    4 
// -5 -4  -3  -2  -1

    });