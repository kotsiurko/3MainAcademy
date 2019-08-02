var currentUser = {};
var allUsers = [];
var firstName, secondName, email, password;

function regUser() {
    firstName = document.getElementById("fname");
    secondName = document.getElementById("sname");
    email = document.getElementById("email");
    password = document.getElementById("pswrd");
    if (validate(email.value, password.value)){
        currentUser.firstName = firstName.value;
        currentUser.secondName = secondName.value;
        currentUser.email = email.value;
        currentUser.password = password.value;
        var temp = localStorage.getItem("allUsers");
        if (temp) {
            allUsers= JSON.parse(temp);
            allUsers.push(currentUser);
        } else{
            allUsers.push(currentUser);
        }
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        window.location.href = "../index.html";
    } else {
        return ;
    }

}
function validate(email, password){
    validateEmail(email);
    validatePswrd(password);
    if (validateEmail(email) && validatePswrd(password)){
        return true;
    } else {
        return false;
    }
}

function validateEmail(userEmail){
    var re = /\S+@\S+\.\S+/;
    var result = re.test(userEmail);
    if (result){
        email.style.borderColor = "green";
        return true;
    } else {
        email.style.borderColor = "red";
        return false;
    }
}
function validatePswrd (password){
    return true;
// FOR HOMEWORK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}