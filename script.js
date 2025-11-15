// ======== EFEITO DE DIGITAÇÃO NO TÍTULO ========
const titleElement = document.querySelector("header h1 span");
const originalText = "Adriely Abdala";
let index = 0;

function typingEffect() {
  if (index < originalText.length) {
    titleElement.textContent += originalText.charAt(index);
    index++;
    setTimeout(typingEffect, 120);
  }
}

// Limpa o texto e inicia a animação
titleElement.textContent = "";
typingEffect();


// ======== ANIMAÇÃO DOS CARDS AO SCROLL ========
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.8s ease";
  observer.observe(card);
});


// ======== ROLAGEM SUAVE NO MENU ========
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // animação leve de clique
    this.style.transform = "scale(1.1)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 200);
  });
});


// ======== MENU DESTACA A SEÇÃO ATUAL ========
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function highlightMenu() {
  let scrollPos = window.scrollY + 150;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      const activeId = sec.getAttribute("id");
      navLinks.forEach(link => link.classList.remove("active"));

      document.querySelector(`nav a[href="#${activeId}"]`)?.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightMenu);


// ======== ESTILO DA CLASSE ACTIVE ========
const style = document.createElement("style");
style.textContent = `
  nav a.active {
    color: #ffb3ff;
    text-shadow: 0 0 8px #ffb3ff;
  }
`;
document.head.appendChild(style);
