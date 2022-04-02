import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";

const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <Background />
      <div className="profile">
        <div className="profile_text">
          <h1>Hello !</h1>
          <h2>I'm Guillaume MORET</h2>
          <h3>Aka. Ayakor</h3>
          <h3>I'm a french young developer</h3>
        </div>
        <img src="./coffee.gif" alt="coffee" />
      </div>
      <div className="githubStats">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AyakorK&show_icons=true&theme=tokyonight" alt="github" />
      <div className="programmationLanguages">

      </div>
      </div>

    </div>
  );
};

export default Homepage;
