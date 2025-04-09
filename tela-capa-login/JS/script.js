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

function abrirLogin() {
  const panel = document.getElementById("panel");
  const initialContent = document.getElementById("initialContent");
  const loginForm = document.getElementById("loginForm");

  const logoArea = document.querySelector('.logo-panel-area');
  const frase = document.querySelector('.frase-content');
  const descricao = document.querySelector('.descricao-content');
  const links = document.querySelector('.links-adicionais');
  const startBtn = document.getElementById('startBtn');

  // Adiciona a classe que expande a div (continua com transição)
  panel.classList.add("expandido");

  // Esconde os elementos imediatamente
  if (logoArea) logoArea.style.display = 'none';
  if (frase) frase.style.display = 'none';
  if (descricao) descricao.style.display = 'none';
  if (links) links.style.display = 'none';
  if (startBtn) startBtn.style.display = 'none';
  if (initialContent) initialContent.style.display = "none";

  // Mostra o formulário de login após a expansão (transição = 800ms)
  setTimeout(() => {
    if (loginForm) loginForm.style.display = "flex";
  }, 800);
}


setTimeout(() => {
  if (logoArea) logoArea.style.display = 'none';
  if (frase) frase.style.display = 'none';
  if (descricao) descricao.style.display = 'none';
  if (links) links.style.display = 'none';
  if (startBtn) startBtn.style.display = 'none';

  initialContent.style.display = "none";

  // Remove e adiciona para reiniciar animação
  loginForm.style.display = "flex";
  loginForm.style.animation = "none"; // remove temporariamente
  void loginForm.offsetWidth;         // força reflow
  loginForm.style.animation = "fadeIn 0.5s ease forwards";
}, 100); // ou 800 se quiser manter o tempo de transição do panel

document.getElementById('abrirLogin').addEventListener('click', function () {
  const form = document.getElementById('loginForm');
  form.classList.add('mostrar'); // Ativa display: flex
});

