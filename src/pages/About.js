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
        <a href="https://goo.gl/maps/dH6UKCcZhkNqSkvr8">{`{Ridgewood, Queens}`}</a>
        .
      </p>{" "}
      <br />
      <p>
        I took an interest in computer science after reading Safiya Noble's{" "}
        <a href="https://en.wikipedia.org/wiki/Algorithms_of_Oppression">{`{Algorithms of Oppression}`}</a>{" "}
        and was fascinated by the power of code and the impact it has on shaping
        our daily lives, specifically how programs can perpetuate and contribute
        to discriminatory and anti-Black bias in society. I wanted to play a
        role in creating software that would push back against these prejudices
        and use my skills towards projects tackling houselessness, poverty,
        transphobia, homophobia, and sexism. I decided thereafter to study basic
        HTML, CSS, and JavaScript in order to prepare myself to begin my journey
        in tech.
      </p>{" "}
      <br />
      <p>
        In the fall of 2021 I enrolled into General Assembly's Software
        Engineering Immersive Bootcamp to build upon some of the fundamental
        skills I had previously learned. In that intensive three month program,
        I picked up both front and backend skills in some of the following
        languages, libraries, and frameworks:
      </p>{" "}
      <br />
      <a href="https://reactjs.org/">{`{React}`}</a> <br />
      <a href="https://reactnative.dev/">{`{React Native}`}</a> <br />
      <a href="https://rubyonrails.org/">{`{Ruby on Rails}`}</a> <br />
      <a href="https://www.djangoproject.com/">{`{Python / Django}`}</a> <br />
      <a href="https://www.typescriptlang.org/">{`{TypeScript}`}</a> <br />
      <a href="https://jquery.com/">{`{jQuery}`}</a> 
      <br />
      <br />
      <p>
        Early on in the process, I've quickly found a love for frontend web design. Each new project I'm working on strengthening my design skills as well as always pushing to make my work more and more functional.
      </p>
    </div>
  );
}

export default About;
