import React from 'react';
import Particles from "react-tsparticles";

const Background = () => {
    
    return (
    <div className="background">
        <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 144,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
                force: 2,
                
                
              },
              onHover: {
                enable: true,
                mode: "repulse",
                
                parallax: {
                    enable: true,
                    force: 40,
                    smooth: 10,
                    reverse: true,
                },
              },
              resize: false,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 10,
                opacity: 0.5,
                size: 1,
              },
              push: {
                quantity: 2,
                
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#cbb2fe",
            },
            links: {
              color: "#cbb2fe",
              distance: 240,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 2,
              straight: false,
              
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "line",
            },
            size: {
              random: true,
              value: 8,
            },
          },
          detectRetina: true,
        }}
      />
      </div>
      );
};

export default Background;