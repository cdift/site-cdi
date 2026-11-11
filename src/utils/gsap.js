/* GSAP configurado uma vez para o site todo: plugin de rolagem e o hook de
   React. Importe gsap e useGSAP daqui, não direto do pacote. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Animações só rodam se o sistema não pedir "reduzir movimento". */
export const semMovimento = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger, useGSAP };
