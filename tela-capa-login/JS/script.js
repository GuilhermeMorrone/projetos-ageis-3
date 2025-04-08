// Efeito de digitação
const text = "O seu feedback<br> é muito importante";
const typedText = document.getElementById("typed-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
      if (text.slice(index, index + 4) === "<br>") {
        typedText.innerHTML += "<br>";
        index += 4;
      } else {
        typedText.innerHTML += text.charAt(index);
        index++;
      }
      setTimeout(typeEffect, 70);
    }
  }

window.onload = typeEffect;

// Função para abrir o login e expandir a div azul
function abrirLogin() {
  const panel = document.getElementById("panel");
  const initialContent = document.getElementById("initialContent");
  const loginForm = document.getElementById("loginForm");

  // Adiciona a classe que expande a div
  panel.classList.add("expandido");

  // Espera a transição terminar antes de trocar o conteúdo
  setTimeout(() => {
    initialContent.style.display = "none";
    loginForm.style.display = "flex";
  }, 800); // tempo deve bater com a 'transition' do CSS
}
