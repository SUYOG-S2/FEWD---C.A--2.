
var sbt = document.getElementById("sbt");
sbt.addEventListener("click", function (e) {

  var userValue = document.getElementById("user").value;
  console.log(userValue);
  localStorage.setItem("userInput", userValue);

  var userrValue = document.getElementById("userr").value;
  localStorage.setItem("userrInput", userrValue);
  console.log(userrValue);

  if (userValue.length > 0 && userrValue.length > 0) {
      console.log("navigating")
      window.location.href = "./Answer2.html"
  } else{
      alert('Please Fill The Details')
  }

  e.preventDefault()  
});
