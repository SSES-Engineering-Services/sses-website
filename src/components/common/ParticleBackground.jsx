import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="sses-particles"
      className="absolute inset-0"
      options={{
        fullScreen: {
          enable: false,
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
            },
          },

          color: {
            value: "#F28C28",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.08,
              max: 0.28,
            },
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          links: {
            enable: true,
            distance: 150,
            color: "#FFFFFF",
            opacity: 0.08,
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.18,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;