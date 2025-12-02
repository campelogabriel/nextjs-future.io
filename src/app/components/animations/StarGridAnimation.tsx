"use client";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Animação de piscar
const blink = keyframes`
  0% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.4); opacity: 1; }
  100% { transform: scale(1); opacity: 0.2; }
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

// Uma estrela isolada com posição aleatória
const Star = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  font-size: ${() => 0.7 + Math.random() * 1.4}rem;
  animation: ${blink} ${() => 1.2 + Math.random() * 2.8}s infinite ease-in-out;
  animation-delay: ${() => Math.random() * 2}s;
  filter: brightness(${() => 0.7 + Math.random() * 0.8});
`;

export default function StarChaosAnimation() {
  // 12 colunas e cada uma com quantidades aleatórias
  const columns = 12;
  const columnStars = Array.from({ length: columns }).map(
    () => 2 + Math.floor(Math.random() * 8) // de 2 a 10 estrelas por coluna
  );

  const allStars = columnStars.flatMap((count, colIndex) =>
    Array.from({ length: count }).map(() => ({
      x: colIndex * (100 / columns) + Math.random() * (100 / columns),
      y: Math.random() * 100,
    }))
  );

  return (
    <Wrapper>
      {allStars.map((star, i) => (
        <Star key={i} x={star.x} y={star.y}>
          ⭐
        </Star>
      ))}
    </Wrapper>
  );
}
