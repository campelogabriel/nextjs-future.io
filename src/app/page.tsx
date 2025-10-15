"use client";
import React, { useEffect, useRef, useState } from "react";
import Title from "./components/Title";

const Home = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [emojis, setEmojis] = useState<any>([]);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  // Lista de emojis de profissões
  const professions = [
    "👨‍⚕️",
    "👩‍⚕️",
    "👨‍🚒",
    "👩‍🚒",
    "👨‍🍳",
    "👩‍🍳",
    "👨‍💻",
    "👩‍💻",
    "👨‍🏫",
    "👩‍🏫",
    "👨‍🔬",
    "👩‍🔬",
    "👨‍🚀",
    "👩‍🚀",
    "👨‍🎨",
    "👩‍🎨",
    "👨‍🔧",
    "👩‍🔧",
    "👨‍💼",
    "👩‍💼",
    "👨‍🔧",
    "👩‍🔧",
    "👨‍🌾",
    "👩‍🌾",
    "👨‍🏭",
    "👩‍🏭",
    "👨‍✈️",
    "👩‍✈️",
    "👨‍🚀",
    "👩‍🚀",
  ];

  // Criar emojis no fundo com profundidade variada
  useEffect(() => {
    const newEmojis: any = [];
    const totalEmojis = 120; // Total de emojis

    // Configuração das colunas - cada coluna tem um número diferente de emojis
    const columnsConfig = [
      { count: 8, width: "14.5%" }, // Coluna 1: 8 emojis
      { count: 9, width: "14.5%" }, // Coluna 1: 8 emojis
      { count: 12, width: "12.5%" }, // Coluna 2: 12 emojis
      { count: 10, width: "11.5%" }, // Coluna 3: 6 emojis
      { count: 8, width: "12.5%" }, // Coluna 4: 10 emojis
      { count: 15, width: "10.5%" }, // Coluna 5: 15 emojis
      { count: 9, width: "10.5%" }, // Coluna 6: 9 emojis
      { count: 7, width: "12.5%" }, // Coluna 7: 7 emojis
      { count: 11, width: "8.5%" }, // Coluna 8: 13 emojis
      { count: 6, width: "8.5%" }, // Coluna 8: 13 emojis
    ];

    let emojiIndex = 0;

    columnsConfig.forEach((column, columnIndex) => {
      for (let i = 0; i < column.count && emojiIndex < totalEmojis; i++) {
        const emoji =
          professions[Math.floor(Math.random() * professions.length)];

        // Profundidade aleatória (0 = fundo, 1 = meio, 2 = frente)
        const depth = Math.floor(Math.random() * 3);

        // Configurações baseadas na profundidade
        let fontSize, opacity, zIndex, speedFactor;

        switch (depth) {
          case 0: // Fundo - menor, mais transparente, move menos
            fontSize = 1 + Math.random() * 1;
            opacity = 0.2 + Math.random() * 0.3;
            zIndex = 1;
            speedFactor = 0.5;
            break;
          case 1: // Meio - médio
            fontSize = 1.5 + Math.random() * 1.5;
            opacity = 0.4 + Math.random() * 0.4;
            zIndex = 2;
            speedFactor = 0.8;
            break;
          case 2: // Frente - maior, mais opaco, move mais
            fontSize = 2 + Math.random() * 2;
            opacity = 0.6 + Math.random() * 0.4;
            zIndex = 3;
            speedFactor = 1.2;
            break;
          default:
            fontSize = 1.5 + Math.random() * 1.5;
            opacity = 0.5;
            zIndex = 2;
            speedFactor = 1;
        }

        // Posição na coluna
        const positionInColumn = i / column.count;
        const top = 5 + positionInColumn * 90; // 5% a 95% da altura
        const left = columnIndex * 12.5 + Math.random() * 8; // Posição na coluna com pequena variação

        newEmojis.push(
          <div
            key={emojiIndex}
            className="emoji border bg-indigo-50 shadow p-2 rounded-2xl opacity-30 select-none absolute transition-transform duration-2000 ease-out"
            style={{
              fontSize: `${fontSize}rem`,
              opacity: opacity,
              zIndex: zIndex,
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
            }}
            data-depth={depth}
            data-speed={speedFactor}
          >
            {emoji}
          </div>
        );

        emojiIndex++;
      }
    });

    setEmojis(newEmojis);
  }, []);

  // Função de animação suave
  const animate = () => {
    const ease = 0.55; // Fator de suavização (quanto menor, mais suave)

    // Calcular diferença entre posição atual e alvo
    const dx = targetPosition.current.x - currentPosition.current.x;
    const dy = targetPosition.current.y - currentPosition.current.y;

    // Aplicar easing
    currentPosition.current.x += dx * ease;
    currentPosition.current.y += dy * ease;

    // Aplicar movimento ao fundo
    if (backgroundRef.current) {
      backgroundRef.current.style.transform = `translate(-${currentPosition.current.x}%, -${currentPosition.current.y}%)`;
    }

    // Efeito adicional nos emojis individuais com base na profundidade
    const emojiElements = document.querySelectorAll(".emoji");
    emojiElements.forEach((emoji) => {
      const depth = parseInt(
        (emoji as HTMLElement).getAttribute("data-depth") || "1"
      );
      const speedFactor = parseFloat(
        (emoji as HTMLElement).getAttribute("data-speed") || "1"
      );

      const baseSpeed = 0.02;
      const speed = baseSpeed * speedFactor;
      const x = currentPosition.current.x * speed * 10;
      const y = currentPosition.current.y * speed * 10;

      (
        emoji as HTMLElement
      ).style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });

    // Continuar animação se ainda não chegou perto o suficiente do alvo
    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      animationFrameId.current = 0; // Parar a animação
    }
  };

  // Efeito de movimento com o mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Atualizar posição alvo
      targetPosition.current.x = (e.clientX / window.innerWidth) * 10;
      targetPosition.current.y = (e.clientY / window.innerHeight) * 10;

      // Iniciar animação se não estiver rodando
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 overflow-hidden relative font-sans">
      <Title />
      {/* Background com emojis */}
      <div
        ref={backgroundRef}
        className="absolute backdrop-blur-xs -top-10 -left-10 w-[120%] h-[120%] transition-transform duration-2000 ease-out z-0"
      >
        {emojis}
      </div>
    </div>
  );
};

export default Home;
