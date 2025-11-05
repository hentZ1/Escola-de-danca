document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".section");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));

            button.classList.add("active");
            const target = button.getAttribute("data-section");
            const targetSection = document.getElementById(target);

            if (targetSection) {
                targetSection.classList.add("active");
            }

            if (target === "sair") {
                const confirmar = confirm("Deseja realmente sair?");
                if (confirmar) {
                    window.location.href = "../login/index.html";
                } else {
                    button.classList.remove("active");
                    document.getElementById("inicio").classList.add("active");
                    navButtons[0].classList.add("active");
                }
            }
        });
    });
});
