console.log("HI");
function validate()
{
	var user=document.getElementById("user").value;
	var pass=document.getElementById("pass").value;
	if(user=="Anagha" && pass=="12345")
		alert("Login successful");

	else if(user=="Anagha" && pass!="exo1danu")
		alert("Password incorrect");
	else
		alert("Username or password incorrect");
}