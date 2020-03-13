import React from "react";
import "./App.css";

import github from "./github.png";
import linkedIn from "./linkedIn.png";
import home from "./home.png";
import apps from "./apps.png";

function Footer() {
  return (
    <div className="footer">
      <img
        className="home"
        src={home}
        alt="home"
        style={{
          width: 58,
          height: 58,
          padding: 20
        }}
      />
      <img
        className="apps"
        src={apps}
        alt="apps"
        style={{
          width: 58,
          height: 58,
          padding: 20
        }}
      />
      <a href="https://github.com/jkmagnussen/To-Du">
        <img
          className="github"
          src={github}
          alt="github"
          style={{
            width: 58,
            height: 58,
            padding: 20
          }}
        />
      </a>

      <a href="https://linkedin.com/in/joseph-magnussen/">
        <img
          className="linkedIn"
          src={linkedIn}
          alt="linkedIn"
          style={{
            width: 58,
            height: 58,
            padding: 20
          }}
        />
      </a>
    </div>
  );
}

export default Footer;
