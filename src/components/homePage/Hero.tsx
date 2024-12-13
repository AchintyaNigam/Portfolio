import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import DraggableMe from "@/components/homePage/Draggable";
import Socials from "@/components/Socials";

const Hero = ({ handleScrollDownClick }: { handleScrollDownClick: () => void; }) => {
  const [bgColr1, setBgColr1] = useState("#03bafc");
  const [bgColr2, setBgColr2] = useState("#034efc");
  const [h1Done, setH1Done] = useState(false);

  useEffect(() => {
    const animation1 = animate("#03bafc", "#8003fc", {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      onUpdate: (value) => {
        setBgColr1(value);
      },
    });

    const animation2 = animate("#8003fc", "#03bafc", {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      onUpdate: (value) => {
        setBgColr2(value);
      },
    });

    return () => {
      animation1.stop();
      animation2.stop();
    };
  }, []);

  useEffect(() => {
    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");
    const space = document.getElementById("space");

    let audio = new Audio("/typewriter.mp3");

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstName = "ACHINTYA";

    if (h1 && h2 && space) {
      space.addEventListener("click", () => {
        audio.play();

        let iterations = 0;
        
        const interval = setInterval(() => {
          setH1Done(false);
          h1.textContent = firstName
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return firstName[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iterations >= firstName.length) {
            setH1Done(true); // Mark h1 animation as done
            clearInterval(interval);
          }
          iterations += 1;
        }, 70);
      })
      h2.addEventListener("click", () => {
        audio.play();

        let iterations = 0;
        
        const interval = setInterval(() => {
          setH1Done(false);
          h1.textContent = firstName
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return firstName[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iterations >= firstName.length) {
            setH1Done(true); // Mark h1 animation as done
            clearInterval(interval);
          }
          iterations += 1;
        }, 70);
      })
      h1.addEventListener("click", () => {
        audio.play();
        let iterations = 0;
        
        const interval = setInterval(() => {
          setH1Done(false);
          h1.textContent = firstName
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return firstName[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iterations >= firstName.length) {
            setH1Done(true); // Mark h1 animation as done
            clearInterval(interval);
          }
          iterations += 1;
        }, 70);
      });
    }
  }, []);

  useEffect(() => {
    const h2 = document.getElementById("h2");

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lastName = "NIGAM";

    if (h2 && h1Done) {
        let iterations = 0;

        const interval = setInterval(() => {
          h2.textContent = lastName
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return lastName[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iterations >= lastName.length) {
            clearInterval(interval);
          }
          iterations += 1;
        }, 50);
    }
  }, [h1Done]); // Re-run this effect when h1Done changes

  return (
    <div
      className="h-screen m-0"
      style={{
        background: `linear-gradient(to right, ${bgColr1}, ${bgColr2})`,
      }}
    >
      <DraggableMe />
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <div className="text-8xl font-serif italic">I am</div>

        <div className="mt-4 text-9xl font-mono font-bold hover:tracking-widest duration-300 hover:cursor-pointer flex flex-row">
          <h1 id="h1">ACHINTYA</h1>
          <h1 id="space">&nbsp;</h1>
          <h1 id="h2">NIGAM</h1>
        </div>
        <div className="text-3xl font-mono mt-4">
          Musician, Web Developer, Author
        </div>
      <Socials />


      </div>
      <div className="text-2xl -mt-20 flex flex-col items-center text-white">
          Scroll Down
          <div className="hover:cursor-pointer" onClick={() => handleScrollDownClick()}>
            <IoIosArrowDropdownCircle />
          </div>
        </div>
    </div>
  );
};

export default Hero;
