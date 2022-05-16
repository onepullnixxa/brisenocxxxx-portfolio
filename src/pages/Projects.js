import React from "react";
import MutualAid from "../images/MutualAid.jpg";
import BallIsBeing from "../images/BallIsBeing.jpg";
import SunniesFace from "../images/sunnies-face.jpg";
import CommunityFridge from "../images/community-fridge.jpg";
import BookExcerpts from "../images/excerpts-screenshot.jpg";
import VarietyCoffee from "../images/variety-coffee.jpg";

function Projects() {
  return (
    <div className="projects-body">
      <img
        src={SunniesFace}
        height={400}
        width={750}
        alt="home page of Sunnies Face"
      />
      <p>
        <a href="https://sunniesface.com/"
        target="_blank" rel="noreferrer">{`{Sunnies Face}`}</a>{" "}
        — Website completed together with <a href="https://www.softwave.nyc/" target="_blank" rel="noreferrer">{`{Madison Hardt}`}</a>, <a href="https://spaghetti.directory/users/michael-ray/" target="_blank" rel="noreferrer">{`{Michael Ray}`}</a> and the talented design team at <a href="http://www.human-nyc.com/" target="_blank" rel="noreferrer">{`{Human NYC}`}</a>. Built with Shopify Liquid.
      </p>
      <img 
        src={VarietyCoffee}
        height={400}
        width={750}
        alt="home page of Variety Coffee Roasters site"
      />
      <p>
        <a href="https://varietycoffeeroasters.com/" target="_blank" rel="noreferrer">{`{Variety Coffee Roasters}`}</a>{" "}
        — Website done in collaboration with <a href="http://www.human-nyc.com/" target="_blank" rel="noreferrer">{`{Human NYC}`}</a> for Brooklyn's Variety Coffee Roasters redesign. Built with Shopify Liquid.
      </p>
      <img
        src={CommunityFridge}
        height={400}
        width={750}
        alt="title page of community fridge app"
      />
      <p>
        <a href="https://boring-kilby-88fd89.netlify.app" target="_blank" rel="noreferrer">{`{Community Fridge App}`}</a>{" "}
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
        <a href="https://pensive-knuth-7d02c1.netlify.app/" target="_blank" rel="noreferrer">{`{Mutual Aid Resource}`}</a>{" "}
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
        <a href="https://chrisbriseno-project2.herokuapp.com/home" target="_blank" rel="noreferrer">{`{Ball Is Being}`}</a>{" "}
        — A full-stack blog/e-commerce page which serves as a hub for a former
        archiving project of mine named Ball Is Being. The app was built with Mongoose, Express, MongoDB, and Node.js
      </p>{" "}
      <br />
      <img
        src={BookExcerpts}
        height={400}
        width={700}
        alt="title page of book excerpts html page"
      />
      <p>
      <a href="https://blood-in-my-eye-excerpts-html.vercel.app/" target="_blank" rel="noreferrer">{`{Book Excerpts}`}</a>{" "}
      — A simple HTML project including excerpts from George Jackson's collection of letters and essays, Blood In My Eye.
      </p>
    </div>
  );
}

export default Projects;
