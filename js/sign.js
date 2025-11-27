document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".cadastro-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const responsavelNome = form.responsavel_nome.value.trim();
        const responsavelCPF = form.responsavel_cpf.value.trim();
        const responsavelTelefone = form.responsavel_telefone.value.trim();

        const alunoNome = form.aluno_nome.value.trim();
        const modalidade = form.modalidade.value.trim();

        if (responsavelNome === "" ||
            responsavelCPF === "" ||
            responsavelTelefone === "" ||
            alunoNome === "" ||
            modalidade === "") {

            alert("Por favor, preencha todos os campos.");
            return;
        }

        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(responsavelCPF)) {
            alert("CPF inválido! Use o formato 000.000.000-00.");
            return;
        }

        const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
        if (!phoneRegex.test(responsavelTelefone)) {
            alert("Telefone inválido! Use o formato (11) 99999-9999.");
            return;
        }
        window.location.href = "login.html";
    });

});