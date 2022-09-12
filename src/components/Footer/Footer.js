import React, { useState } from "react";
import "./Footer.css";
import comendrun from "../../Assets/images/comendrun2.jpg";
import { createPortal } from "react-dom";
import { randomStyle } from "../../Styles/styles";

export default function Footer() {
  const [areLinksShown, setAreLinksShown] = useState(false);

  const randomBackgroundColor = randomStyle().card;
  return createPortal(
    <section className="kamran-profile ">
      <div
        title="Github"
        style={randomBackgroundColor}
        className={`icon-container github  ${!areLinksShown && "hidden-icon"}`}
      >
        <a target="_blank" rel="noreferrer" href="https://github.com/comendrun">
          <i className="fa-brands fa-github-alt icons"></i>
        </a>
      </div>

      <div
        title="Personal Website"
        style={randomBackgroundColor}
        className={`icon-container personal  ${
          !areLinksShown && "hidden-icon"
        }`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://comendrun.com/"
          className="text-white"
        >
          <i className="fa-solid fa-globe icons"></i>
        </a>
      </div>

      <div
        title="LinkedIn"
        style={randomBackgroundColor}
        className={`icon-container linkedin  ${
          !areLinksShown && "hidden-icon"
        }`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/comendrun/"
        >
          <i className="fa-brands fa-linkedin icons"></i>
        </a>
      </div>

      <div
        id="comendrun"
        title="Click to expand"
        className="comendrun-img-container"
        onClick={() => setAreLinksShown((preBoolean) => !preBoolean)}
      >
        <img className="comendrun-img" src={comendrun} alt="comendrun" />
      </div>
    </section>,
    document.getElementById("footer")
  );
}
