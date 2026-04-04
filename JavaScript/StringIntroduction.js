document.getElementById("btnSubmit").addEventListener("click", function(){
    debugger;
    var  firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var email = document.getElementById("txtEmail").value;

    // alert(firstName);
    // alert(lastName);
    // alert(email);
    // alert(firstName +' '+ lastName +' '+ email);
//  document.getElementById("pResult").innerHTML="My firstName is " + firstName + " ,My lastName is " + lastName + " ,My email is " + email+'.';
// });
document.getElementById("pResult").innerHTML=`My first name is ${firstname} , My Last name is ${lastname } , My Email is ${email} . `;


});