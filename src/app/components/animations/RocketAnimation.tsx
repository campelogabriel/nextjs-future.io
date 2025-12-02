"use client";

export default function RocketAnimation() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ bottom: "80px" }}
      >
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl rocket-animation"
            style={{
              left: `-100px`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              filter: `hue-rotate(${Math.random() * 360}deg) brightness(${
                0.8 + Math.random() * 0.4
              })`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          >
            🚀
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes rocketFly {
          0% {
            transform: translateX(-100px) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(0) rotate(5deg);
            opacity: 0;
          }
        }

        .rocket-animation {
          animation: rocketFly linear infinite;
          will-change: transform;
        }

        .rocket-animation::after {
          content: "⭐";
          position: absolute;
          left: -20px;
          top: 2px;
          font-size: 0.5em;
          opacity: 0.7;
          animation: trailBlink 0.6s infinite alternate;
        }

        @keyframes trailBlink {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}
