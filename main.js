function validate() {
  const text = document.getElementById("Email").value;

  var regx = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;

  if(regx.test(text)){
    document.getElementById("message").innerHTML="Correct Email address";
    document.getElementById("message").style.display="block"
    document.getElementById("message").style.color="green";
    document.getElementById("message").style.fontSize="13px";
    document.getElementById("message").style.marginLeft="13px";
  }else{
    document.getElementById("message").innerHTML="Please Enter a valid Email address";
    document.getElementById("message").style.display="block"
    document.getElementById("message").style.color="red";
    document.getElementById("message").style.fontSize="13px";
    document.getElementById("message").style.marginLeft="13px";
  }
}
    

