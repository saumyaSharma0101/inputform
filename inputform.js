function myFunc() {
  var name = document.getElementById("name").value;
  if (name.includes("@")) {
    document.getElementById("nameError").innerHTML =
      "<div style='color: green;'>Valid Username!!</div>";
  } else {
    document.getElementById("nameError").innerHTML =
      "<div style='color: red;'>Invalid Username!!</div>";
  }
  var password = document.getElementById("password").value;
  if (checkPassword(password)) {
    document.getElementById("pwdError").innerHTML =
      "<div style='color: green;'>Valid Password!!</div>";
  } else {
    document.getElementById("pwdError").innerHTML =
      "<div style='color: red;'>Invalid Password!!</div>";
  }
}
function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
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
