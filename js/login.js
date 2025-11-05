function submitButton(){

    const email = document.getElementById('email-box').value.trim();
    const password = document.getElementById('password-box').value.trim();
    let emailteste = "zezinho@gmail.com";

    if(email === "" || password === ""){
        alert("Por favor, preencha todos os campos");
        return;
    }
    if(email === emailteste){
        alert("Já existe uma conta com esse email");
    }
    else{
        alert("Login permitido");
    }
}