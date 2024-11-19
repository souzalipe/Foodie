import ScrollReveal from "scrollreveal";

export const scrollRevealConfig = () => {
  ScrollReveal().reveal('.reveal', {
    origin: 'left',    // Direção da animação: 'top', 'right', 'left', ou 'bottom'
    distance: '50px',    // Distância da animação
    duration: 1000,      // Duração em ms
    delay: 200,          // Atraso antes de iniciar a animação
    reset: false,        // Se `true`, a animação repete ao rolar de volta
    easing: 'ease-out',  // Curva de animação
  });
};
