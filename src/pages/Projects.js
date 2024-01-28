import React from "react";
import junedays from "../images/junedays.jpg";
import SunniesFace from "../images/sunnies-face.jpg";
import BookExcerpts from "../images/excerpts-screenshot.jpg";
import VarietyCoffee from "../images/variety-coffee.jpg";
import DuneSuncare from "../images/dune-screenshot.jpg";
import ParFemme from "../images/par-femme.jpg";

function Projects() {
  return (
    <div className="projects-body">
      <img src={ParFemme} height={400} width={750} alt="par femme homepage" />
      <p>
        <a
          href="https://www.parfemme.net"
          target="_blank"
          rel="noreferrer"
        >{`{Par Femme}`}</a>{" "}
        — Built with Vue 3, Nuxt 3, Tailwind CSS and Sanity.io
      </p>
      <img src={junedays} height={400} width={750} alt="junedays home page" />
      <p>
        <a
          href="https://junedays.com/"
          target="_blank"
          rel="noreferrer"
        >{`{junedays}`}</a>{" "}
        — Website completed with{" "}
        <a
          href="http://www.human-nyc.com/"
          target="_blank"
          rel="noreferrer"
        >{`{Human NYC}`}</a>
        . Built with Shopify Liquid.
      </p>
      <img
        src={DuneSuncare}
        height={400}
        width={750}
        alt="dune suncare home page"
      />
      <p>
        <a
          href="https://dunesuncare.com/"
          target="_blank"
          rel="noreferrer"
        >{`{Dune Suncare}`}</a>{" "}
        — Custom Shopify theme written and completed with{" "}
        <a
          href="http://www.human-nyc.com/"
          target="_blank"
          rel="noreferrer"
        >{`{Human NYC}`}</a>
        .
      </p>
      <img
        src={SunniesFace}
        height={400}
        width={750}
        alt="home page of Sunnies Face"
      />
      <p>
        <a
          href="https://sunniesface.com/"
          target="_blank"
          rel="noreferrer"
        >{`{Sunnies Face}`}</a>{" "}
        — Custom Shopify theme written and completed with{" "}
        <a
          href="http://www.human-nyc.com/"
          target="_blank"
          rel="noreferrer"
        >{`{Human NYC}`}</a>
        .
      </p>
      <img
        src={VarietyCoffee}
        height={400}
        width={750}
        alt="home page of Variety Coffee Roasters site"
      />
      <p>
        <a
          href="https://varietycoffeeroasters.com/"
          target="_blank"
          rel="noreferrer"
        >{`{Variety Coffee Roasters}`}</a>{" "}
        — Website completed in collaboration with{" "}
        <a
          href="http://www.human-nyc.com/"
          target="_blank"
          rel="noreferrer"
        >{`{Human NYC}`}</a>{" "}
        for Brooklyn's Variety Coffee Roasters redesign. Built with Shopify
        Liquid.
      </p>
      <img
        src={BookExcerpts}
        height={400}
        width={700}
        alt="title page of book excerpts html page"
      />
      <p>
        <a
          href="https://blood-in-my-eye-excerpts-html.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >{`{Book Excerpts}`}</a>{" "}
        — A simple HTML project including excerpts from George Jackson's
        collection of letters and essays, Blood In My Eye.
      </p>
    </div>
  );
}

export default Projects;
