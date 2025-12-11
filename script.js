/* global gsap, ScrollTrigger */

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Animacion para la cabecera entrando por la izquierda
 */
gsap.from(".cabecera-contenido", {
  duration: 1,
  x: -120,
  opacity: 0,
  ease: "power3.out"
});

/**
 * Animaciones del hero: título, párrafo, botón e imagen.
 */
gsap.from(".hero-titulo", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".hero-parrafo", {
  duration: 1,
  y: 40,
  opacity: 0,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".hero-boton-contenedor", {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.4,
  ease: "power3.out"
});

gsap.from(".hero-imagen-contenedor", {
  duration: 1,
  x: 80,
  opacity: 0,
  delay: 0.3,
  ease: "power3.out"
});

/**
 * Anima cada tarjeta de servicios al hacer scroll.
 * La animación se reproduce al entrar y se revierte al salir,
 * repitiéndose cuando se vuelve a bajar.
 */
document.querySelectorAll(".servicio-tarjeta").forEach((tarjeta, indice) => {
  gsap.from(tarjeta, {
    scrollTrigger: {
      trigger: tarjeta,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play reverse play reverse",
      scrub: false
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: indice * 0.1,
    ease: "power3.out"
  });
});