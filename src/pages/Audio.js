import React from "react";
import Dreamcast from "../images/dreamcast.jpg";
import TenTrax from "../images/10trax.jpg";
import NTSscreen from "../images/NTSscreen.jpg";

function Audio() {
  return (
    <div className="audio-body">
      <img
        src={Dreamcast}
        height={400}
        width={750}
        alt="screen shot of Relativa Radio page"
      />
      <p>
        <a href="https://radiorelativa.eu/show/dreamcast/" target="_blank" rel="noreferrer">{`{Dreamcast}`}</a> 
        — An ongoing program with Madrid's Relativa Radio.
      </p>
      <img
        src={TenTrax}
        height={400}
        width={400}
        alt="screen shot of 10 trax mix"
      />
      <p>
        <a href="https://soundcloud.com/radio-relativa/10trax-066-chris-briseno" target="_blank" rel="noreferrer">{`{10 Trax}`}</a>{" "}
        — Guest mix for Relativa Radio's 10 Trax series.
      </p>

      <img
        src={NTSscreen}
        height={400}
        width={750}
        alt="screen shot of NTS page"
      />
      <p>
        <a href="https://www.nts.live/shows/image-search/episodes/image-search-16-08-17" target="_blank" rel="noreferrer">{`{Animal Image Search}`}</a>{" "}
        — Served as a guest artist on an episode of Landon Odle's series on NTS
        Radio.
      </p>
    </div>
  );
}

export default Audio;
