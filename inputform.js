var username="";
function myFunc() {
  username = document.getElementById("name").value;
 
  if (username.includes("@")) {
    document.getElementById("nameError").innerHTML =
      "<div style='color: green;'>Valid Username!!</div>";
      
      var password = document.getElementById("password").value;
  if (checkPassword(password)) {
    document.getElementById("pwdError").innerHTML =
      "<div style='color: green;'>Valid Password!!</div>";

    
    //Method 1  
     window.location.href = "http://127.0.0.1:5501/redirecting.html?username="+username;
     //window.location.assign same as href

    //Method 2
     //localStorage.setItem("username", username);
    // window.location.href = "http://127.0.0.1:5500/redirecting.html";
     
      
      
  } else{
    document.getElementById("pwdError").innerHTML =
      "<div style='color: red;'>Invalid Password!!</div>";
  }
  
      
  } else {
    document.getElementById("nameError").innerHTML =
      "<div style='color: red;'>Invalid Username!!</div>";
  }
}

function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}


function show() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function login(){
  var b = document.getElementById("border");
  if(b.style.display==="none"){
    b.style.display="flex";
  }else{
    b.style.display="none";
  }
}

// function myFunc() {
//   var name = document.getElementById("name").value;
//   var password = document.getElementById("password").value;
//   document.getElementById("get").innerText = name;
//   //document.getElementsByClassName("flex")[1].innerText = name;
//   // console.log(document.getElementById("get").value);
//   //console.log(window.document.getElementById("name").value);
//   // alert("WRONG");
// }
// console.log("saumya");
//console.log(window.document.getElementById("name"));
function quiz(){
  window.location.href = "http://127.0.0.1:5501/quiz.html";
}