// 1-required fields
function myFunction(x) {
	if( x.classList=="invalid"){
		 x.classList="valid";
		//alert(x.classList);
	}
 
}
 // 1-required fields

function firstnamefoucse() {
	
			document.getElementById("lname").disabled = false;
			document.getElementById("email").disabled = false;
			document.getElementById("llname").disabled = false;
			document.getElementById("pwd").disabled = false;
	
	
 
}
function lastnamefoucse() {
	 	document.getElementById("email").disabled = false;
		document.getElementById("llname").disabled = false;
		document.getElementById("pwd").disabled = false;
	
	 var fname1= document.getElementById("fname").value;
	 if(fname1==""){
			document.getElementById("lname").disabled = true;
	 }
	 else{
		 document.getElementById("lname").disabled = false;
	 }
	
 
}
function emailfoucse() {
	 	
		document.getElementById("llname").disabled = false;
		document.getElementById("pwd").disabled = false;
	
	 var lname1= document.getElementById("lname").value;
	 if(lname1==""){
			document.getElementById("email").disabled = true;
	 }
	 else{
		 document.getElementById("email").disabled = false;
	 }
	
 
}
function usernamefoucse() {
	 	
		
		document.getElementById("pwd").disabled = false;
	
	 var email1= document.getElementById("email").value;
	 if(email1==""){
			document.getElementById("llname").disabled = true;
	 }
	 else{
		 document.getElementById("llname").disabled = false;
	 }
	
 
}
function passwordfoucse() {
	 	
	 var llname1= document.getElementById("llname").value;
	 if(llname1==""){
			document.getElementById("pwd").disabled = true;
	 }
	 else{
		 document.getElementById("pwd").disabled = false;
	 }
	
 
}
 function validate1() {
	 var fname1= document.getElementById("fname").value;
	 var lname1= document.getElementById("lname").value;
	 var email1= document.getElementById("email").value;
	 var llname1= document.getElementById("llname").value;
	 var pwd1= document.getElementById("pwd").value;
	 var emptyfiled=" [ ";



	  
    if (fname1 == "") {
    fname.classList="invalid";
	emptyfiled +=document.getElementById("fname").name+" , ";
    }    

	
	  if ( lname1== "" ) {
    lname.classList="invalid";
	emptyfiled +=document.getElementById("lname").name+" , ";
	
	
	
    } 
	
	  if (email1 == "") {
    email.classList="invalid";
	emptyfiled +=document.getElementById("email").name+" , ";
	
    } 
	
	
	
	  if (llname1 == "") {
		llname.classList="invalid";
		emptyfiled +=document.getElementById("llname").name+" , ";
    } 
	
	  if (pwd1 == "") {
		pwd.classList="invalid";
		emptyfiled +=document.getElementById("pwd").name+" , ";	
	

    }
     emptyfiled +=" ] ";
	 if(fname1 || lname1|| email1||llname1||pwd1==""){
	  alert("please input all required fields, the reguired fileds is"+emptyfiled);

	  }
	return false;
	

  }
  
  // 4-clicks the “Save” button, the JavaScript code extracts the username from the email address
   function extractsUsername(){
	 	 var email1= document.getElementById("email").value;

	 if (email1 == "") {
	  alert("input the Email to extracts the username");
    } 
	 else{
	 var username = email1.substring(0,email1.indexOf('@'))

	  alert("The application of " +" " +"[" +username + "]"+" "+"is saved!");
	 document.getElementById("demo").innerHTML = ("The application of " +" " +"[" +username + "]"+" "+"is saved!");}



	}