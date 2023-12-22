// console.log("hello") 
// alert("world")
// document.getElementById("home").innerHTML = "how are your"

// integer = numbers 
// integers sum

// let a = 5 
// let b = 10
// let random = a + b
// console.log(random)


// string concatenation

// let firstName = "Saurav"  
// let lastName = "uprety"
// let fullName = firstName + " "+ lastName
// console.log("Full Name:", fullName)


// boolean 
// let isRaining = false
// let isSunny = true
// let weather = "is it raining" + " " + isSunny
// console.log(weather)

// simple calculation 
//  a = 5;
// let b = 10;
// let addResult = a + b;
// console.log("Addition", addResult);

function validateForm(){

 let name = document.getElementById('name').value
 let email = document.getElementById('email').value
 let address = document.getElementById('address').value


//  we have name and email

 let nameError = document.getElementById('nameError')
 let emailError = document.getElementById('emailError')
 let addressError = document.getElementById('addressError')


//  we have nameerror and email error

 nameError.innerHTML = ""
 emailError.innerHTML = "" 
 addressError.innerHTML = "" 


//  clear agadi ko message 

 if(name === ""){
  nameError.innerHTML = "Name is required"
  return false
 }
 if(address === ""){
  addressError.innerHTML = "address is required"
  return false
 }

 if(email === ""){
  emailError.innerHTML = "Email is required"
  return false
 }
 return true
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  var MenuItems = document.getElementById("MenuItems");
  MenuItems.style.maxHeight = "0px";
  function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  }


