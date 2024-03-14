import {type ClassValue, clsx} from "clsx";
import {type MotionProps} from "framer-motion";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface useStaggerAnimationProps {
  delay: number;
  type?: "fromLeft" | "fromRight" | "default";
  ty?: number;
}

export function useStaggerAnimation({
  delay,
  type = "default",
  ty = 60,
}: useStaggerAnimationProps): MotionProps {
  const commonTransition = {
    delay,
    duration: 1,
    ease: [0.6, -0.05, 0.01, 0.99],
  };

  let initial = {};
  let animate = {};

  switch (type) {
    case "fromLeft":
      initial = {opacity: 0, translateX: -50};
      animate = {opacity: 1, translateX: 0};
      break;
    case "fromRight":
      initial = {opacity: 0, translateX: 50};
      animate = {opacity: 1, translateX: 0};
      break;
    default:
      initial = {opacity: 0, translateY: ty};
      animate = {opacity: 1, translateY: 0};
      break;
  }

  return {
    viewport: {once: true},
    initial,
    whileInView: animate,
    transition: commonTransition,
  };
}

export function getCurrentDate() {
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, "0");
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const ano = dataAtual.getFullYear();
  return dia + "/" + mes + "/" + ano;
}
