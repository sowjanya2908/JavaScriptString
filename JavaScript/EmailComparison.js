document.getElementById("btnCompare").addEventListener("click", function() {
    debugger;
    var email = document.getElementById("txtEmail").value;

    if(email.toLowerCase().trim()=="sowji123@gmail.com".toLowerCase().trim()) {
        document.getElementById("pResult").innerHTML = "Login successful.";
    } else {
        document.getElementById("pResult").innerHTML = "Login failed. Please check your email.";
    }
});0