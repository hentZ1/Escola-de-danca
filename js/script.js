

function submitButton(){

    const email = document.getElementById('email-box').value;
    const password = document.getElementById('password-box').value;
    let emailteste = "zezinho@gmail.com";

    if(email == emailteste){
        alert("ja existe uma conta com esse email");
    }else{
        alert("Login permitido");

    }
}