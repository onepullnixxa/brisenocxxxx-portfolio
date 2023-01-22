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
        Hi! My name is Chris and I'm a full-stack software engineer living in{" "}
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
        In 2021 I enrolled into General Assembly's Software
        Engineering Immersive Bootcamp to build upon some of the fundamental
        skills I had previously learned by self-teaching. In that intensive three month program,
        I picked up both front and backend skills in some of the following
        languages, libraries, and frameworks:
      </p>{" "}
      <br />
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">{`{React.js}`}</a> <br />
      <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">{`{React Native}`}</a> <br />
      <a href="https://v3.vuejs.org/" target="_blank" rel="noreferrer">{`{Vue.js}`}</a> <br/>
      <a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">{`{Ruby on Rails}`}</a> <br />
      <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">{`{Python / Django}`}</a> <br />
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">{`{TypeScript}`}</a> <br />
      <a href="https://shopify.github.io/liquid/" target="_blank" rel="noreferrer">{`{Shopify Liquid}`}</a> <br />
      <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">{`{SCSS}`}</a> <br />
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">{`{Tailwind CSS}`}</a> <br />
      <br />
      <p>
        Early on in my development career, I've quickly found a love for frontend web design. With each new project I'm working on strengthening my design skills as well as always pushing to make my work more and more functional.
      </p>
    </div>
  );
}

export default About;
