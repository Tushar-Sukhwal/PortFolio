"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroText = () => {
  const [typeEffect] = useTypewriter({
    words: ["the Web.", "the Mobile.", "the Future."],
    typeSpeed: 130,
    deleteSpeed: 60,
    loop: true,
  });
  const rand = (min: any, max: any) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const animate = (star: any) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };

  useEffect(() => {
    const magicStars = document.querySelectorAll(".magic-star");

    const animateStars = (index: number) => {
      setTimeout(() => {
        animate(magicStars[index]);

        setInterval(() => animate(magicStars[index]), 1000);
      }, index * (1000 / 3));
    };

    magicStars.forEach((star, index) => animateStars(index));
  }, []);

  return (
    <motion.div
      className="montserrat text-white z-[20] mt-[300px] md:pl-10 pl-5 flex-col flex justify-start items-start "
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={slideInFromTop}
        className="text-lg mb-10 text-purple-500"
      >
        Hi, my name is{" "}
      </motion.h1>
      <motion.h1
        variants={slideInFromLeft(0.3)}
        className="md:text-7xl font-bold mb-5 text-4xl montserrat" 
      >
        Tushar Sukhwal.{" "}
      </motion.h1>
      <motion.h1
        variants={slideInFromLeft(0.4)}
        className="md:text-5xl font-bold mb-10 text-4xl"
      >
        <span className="opacity-60">I build things <br className="md:hidden block"/>for</span>
        <span>
          {" "}
        </span>
        <span className="magic">
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-text">{typeEffect}</span>
        </span>
      </motion.h1>
      <motion.p variants={slideInFromLeft(0.5)} className="w-[90%] md:w-[50%] montserrat">
        <span className="opacity-40">
          I am a full stack developer in MERN stack. I have a strong foundation
          in front-end and back-end development and am skilled in creating
          user-friendly and responsive web-applications using React and its
          ecosystem.
        </span>
      </motion.p>

      <div className="mt-14 flex gap-7   ">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 70 }}
          transition={{ duration: 5, delay: 0.5, type: "easeIn" }}
          className="flex opacity-70 gap-3 hover:opacity-100 transition"
        >
          <Github className="w-10 h-10" />
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 70 }}
          transition={{ duration: 5, delay: 0.5, type: "easeIn" }}
          className="opacity-70 hover:opacity-100 transition"
        >
          <Linkedin className="w-10 h-10" />{" "}
        </motion.button>
      </div>
    </motion.div>
  );
};
export default HeroText;
