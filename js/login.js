function logIn(){
    var users = JSON.parse(localStorage.getItem(allUsers));
    var email = document.getElementById("email").value;
    var pasword = document.getElementById("pswrd").value;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == pasword){
            window.location.href = "../index.html";
        }
    }
}
