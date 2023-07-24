
<?php
function validate()
{
	$user=document.getElementById("user").value;
	$pass=document.getElementById("pass").value;
	if($user=="Anagha" && $pass=="12345")
		echo"alert("Login successful")";

	else if($user=="Anagha" && $pass!="exo1danu")
		echo"alert("Password incorrect")";
	else
		echo"alert("Username or password incorrect")";
}?>
