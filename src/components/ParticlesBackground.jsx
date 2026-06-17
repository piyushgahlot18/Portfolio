import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 80 },
          color: { value: ["#3b82f6", "#8b5cf6"] },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.3,
            width: 1,
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}