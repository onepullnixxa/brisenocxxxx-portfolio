import React from "react";
import AboutPic from "../images/icecreamselfie.jpg";

function About() {
  return (
    <div className="about-body">
      <img
        className="about-pic"
        src={AboutPic}
        height={400}
        width={400}
        alt="me eating ice cream"
      />
      <p>
        My name is Chris and I'm a full-stack software engineer living in{" "}
        <a href="https://goo.gl/maps/dH6UKCcZhkNqSkvr8" target="_blank" rel="noreferrer">{`{Ridgewood, Queens}`}</a>
        .
      </p>{" "}
      <br />
      <p>
        I took an interest in computer science after reading Safiya Noble's{" "}
        <a href="https://en.wikipedia.org/wiki/Algorithms_of_Oppression" target="_blank" rel="noreferrer">{`{Algorithms of Oppression}`}</a>{" "}
        and was fascinated by the power of writing software and its impact on shaping
        our daily lives, specifically how programs can perpetuate and contribute
        to discriminatory and anti-Black bias in society. I wanted to play a
        role in creating software that would push back against these prejudices
        and use my skills towards projects tackling houselessness, poverty,
        transphobia, homophobia, and sexism.
      </p>{" "}
      <br />
      <p>
        I've now been writing software for two years and have builiding websites in some of the following libraries and frameworks:
      </p>{" "}
      <br />
      <div className="skill-block">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">{`{React.js}`}</a> <br />
        <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">{`{React Native}`}</a> <br />
        <a href="https://v3.vuejs.org/" target="_blank" rel="noreferrer">{`{Vue.js}`}</a> <br/>
        <a href="https://www.sanity.io/studio/" target="_blank" rel="noreferrer">{`{Sanity Studio}`}</a><br />
        <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">{`{Ruby on Rails}`}</a> <br />
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">{`{TypeScript}`}</a> <br />
        <a href="https://shopify.github.io/liquid/" target="_blank" rel="noreferrer">{`{Shopify Liquid}`}</a> <br />
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">{`{SCSS}`}</a> <br />
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">{`{Tailwind CSS}`}</a>
        </div>
        <br />
      <p>
        In my journey as a developer, I've discovered a deep passion for frontend web design. Every project I undertake allows me to further refine my design skills and consistently strive for greater functionality and scalability. With each new endeavor, I'm committed to honing my abilities and delivering exceptional work.
      </p>
    </div>
  );
}

export default About;
