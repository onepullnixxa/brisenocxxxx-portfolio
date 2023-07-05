import React from "react";
import MutualAid from "../images/MutualAid.jpg";
import junedays from "../images/junedays.jpg";
import SunniesFace from "../images/sunnies-face.jpg";
import CommunityFridge from "../images/community-fridge.jpg";
import BookExcerpts from "../images/excerpts-screenshot.jpg";
import VarietyCoffee from "../images/variety-coffee.jpg";
import DuneSuncare from "../images/dune-screenshot.jpg";
import ParFemme from "../images/par-femme.jpg";

function Projects() {
  return (
    <div className="projects-body">
      <img
        src={ParFemme}
        height={400}
        width={750}
        alt="par femme homepage"
      />
      <p>
        <a href="https://www.parfemme.net"
        target="_blank" rel="noreferrer">{`{Par Femme}`}</a>{" "}
        — Built using Vue 3, Nuxt 3 and Sanity.io
      </p>
      <img
        src={junedays}
        height={400}
        width={750}
        alt="junedays home page"
      />
      <p>
        <a href="https://junedays.com/"
        target="_blank" rel="noreferrer">{`{junedays}`}</a>{" "}
        — Custom Shopify theme written and completed with <a href="http://www.human-nyc.com/"
        target="_blank" rel="noreferrer">{`{Human NYC}`}</a>.
      </p>
      <img
        src={DuneSuncare}
        height={400}
        width={750}
        alt="dune suncare home page"
      />
      <p>
        <a href="https://dunesuncare.com/"
        target="_blank" rel="noreferrer">{`{Dune Suncare}`}</a>{" "}
        — Website completed with <a href="http://www.human-nyc.com/" target="_blank" rel="noreferrer">{`{Human NYC}`}</a>.
      </p>
      <img
        src={SunniesFace}
        height={400}
        width={750}
        alt="home page of Sunnies Face"
      />
      <p>
        <a href="https://sunniesface.com/"
        target="_blank" rel="noreferrer">{`{Sunnies Face}`}</a>{" "}
        — Website completed with <a href="https://www.softwave.nyc/" target="_blank" rel="noreferrer">{`{Madison Hardt}`}</a>, <a href="https://spaghetti.directory/users/michael-ray/" target="_blank" rel="noreferrer">{`{Michael Ray}`}</a> and <a href="https://leilabartholet.com/" target="_blank" rel="noreferrer">{`{Leila Bartholet}`}</a> for <a href="http://www.human-nyc.com/" target="_blank" rel="noreferrer">{`{Human NYC}`}</a>. Built with Shopify Liquid.
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
