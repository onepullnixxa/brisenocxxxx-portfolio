import React from "react";
import MutualAid from "../images/MutualAid.jpg";
import BallIsBeing from "../images/BallIsBeing.jpg";
import TriviaGameAPI from "../images/trivia-game.jpg";
import CommunityFridge from "../images/community-fridge.jpg"

function Projects() {
  return (
    <div className="projects-body">
      <img
        src={CommunityFridge}
        height={400}
        width={750}
        alt="title page of community fridge app"
      />
      <p>
        <a href="https://github.com/onepullnixxa/community-fridge-app-frontend">{`{Community Fridge App}`}</a>{" "}
        — Work in progress
      </p>{" "}
      <br />
      <img
        src={MutualAid}
        height={400}
        width={700}
        alt="title page of mutual aid resource website"
      />
      <p>
        <a href="https://pensive-knuth-7d02c1.netlify.app/">{`{Mutual Aid Resource}`}</a>{" "}
        — A full-stack application which allows users to boost aid requests of
        Black Trans and Non-Binary individuals in need of financial aid and
        assistance. The app was built with React, Express, MongoDB, and Node.js
      </p>{" "}
      <br />
      <img
        src={BallIsBeing}
        height={400}
        width={700}
        alt="title page of ball is being website"
      />
      <p>
        <a href="https://chrisbriseno-project2.herokuapp.com/home">{`{Ball Is Being}`}</a>{" "}
        — A full-stack blog/e-commerce page which serves as a hub for a former
        archiving project of mine named Ball Is Being. The app was built with Mongoose, Express, MongoDB, and Node.js
      </p>{" "}
      <br />
      <img
        src={TriviaGameAPI}
        height={400}
        width={700}
        alt="title page of the trivia game API website"
      />
      <p>
      <a href="https://nifty-fermat-94bc6d.netlify.app/">{`{Test Your Knowledge}`}</a>{" "}
      — My first project utilizing the OpenTrivia API and built with HTML, CSS, and JavaScript.
      </p>
    </div>
  );
}

export default Projects;
