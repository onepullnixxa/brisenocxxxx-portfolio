import React from "react";
import MutualAid from "../images/MutualAid.jpg";
import BallIsBeing from "../images/BallIsBeing.jpg";

function Projects() {
  return (
    <div className="projects-body">
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
      <p></p>
    </div>
  );
}

export default Projects;
