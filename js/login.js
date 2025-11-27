function submitButton(){

    const email = document.getElementById('email-box').value.trim();
    const password = document.getElementById('password-box').value.trim();

    if(email === "" || password === ""){
        alert("Por favor, preencha todos os campos");
        return;
    }

    window.location.href = "../dashboard.html";
}