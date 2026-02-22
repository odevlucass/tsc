const aba = document.querySelector(".aba");
const carta = document.querySelector(".carta");
const papel = document.querySelector(".papel");
const conteudo = document.querySelector(".conteudo");
const btnFechar = document.querySelector(".fechar");

// ABRIR
carta.addEventListener("click", () => {
  gsap.to(aba, { duration: 1, rotateX: -180, ease: "power2.inOut" });

  gsap.to(papel, { 
    duration: 1, 
    opacity: 1, 
    width: 280, 
    height: 160, 
    delay: 1, 
    ease: "power2.out" 
  });

  gsap.to(papel, { 
    duration: 1.2, 
    width: "100vw", 
    height: "100vh", 
    delay: 2, 
    ease: "power4.inOut" 
  });

  gsap.to(carta, { 
    duration: 1.2, 
    y: 500, 
    opacity: 0, 
    delay: 2, 
    ease: "power2.in" 
  });

  gsap.to(conteudo, { 
    duration: 1, 
    opacity: 1, 
    delay: 2.2 
  });

  // trava scroll do body (vertical e horizontal)
  document.body.style.overflowY = "hidden";
  document.body.style.overflowX = "hidden";
});

// FECHAR
btnFechar.addEventListener("click", () => {
  gsap.to(conteudo, { duration: 0.5, opacity: 0 });
  gsap.to(papel, { 
    duration: 1, 
    width: 0, 
    height: 0, 
    opacity: 0, 
    ease: "power2.inOut" 
  });
  gsap.to(carta, { 
    duration: 1, 
    y: 0, 
    opacity: 1, 
    ease: "power2.out" 
  });
  gsap.to(aba, { 
    duration: 1, 
    rotateX: 0, 
    ease: "power2.inOut" 
  });

  // libera apenas scroll vertical do body, mantém horizontal bloqueado
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";
});

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona apenas os links internos (que começam com #)
    const linksInternos = document.querySelectorAll('.menuLinks a[href^="#"]');
  
    linksInternos.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
  
        const id = link.getAttribute("href");
        const destino = document.querySelector(id);
  
        if (destino) {
          destino.scrollIntoView({
            behavior: "smooth",
            block: "start" // rola até o início da seção
          });
        }
      });
    });
  });