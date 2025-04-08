function saudacao(){
    var agora = new Date();
    var horas = agora.getHours();
    var saudacao;

    if (horas >= 0 && horas < 12) {
        saudacao = "Bom dia,";
    } else if (horas >= 12 && horas < 18) {
        saudacao = "Boa tarde,";
    } else {
        saudacao = "Boa noite,";
    }

    document.getElementById("saudacao").innerText = saudacao;
}

document.addEventListener("DOMContentLoaded", function () {
    const starContainers = document.querySelectorAll(".star-rating");

    starContainers.forEach(container => {
        const stars = container.querySelectorAll(".star");
        stars.forEach(star => {
            star.addEventListener("click", function () {
                let value = this.getAttribute("data-value");

                // Remove classe ativa de todas
                stars.forEach(s => s.classList.remove("active"));

                // Adiciona classe ativa até o índice clicado
                for (let i = 0; i < value; i++) {
                    stars[i].classList.add("active");
                }
            });
        });
    });
});
