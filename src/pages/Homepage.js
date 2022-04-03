import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import Footer from "../components/Footer";

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
        <img src="./room.gif" alt="coding" />
      </div>

      <div className="githubStats">
          <div className="graph">
          <h1>Github Stats</h1>
        <div className="githubGraph">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AyakorK&show_icons=true&theme=tokyonight" alt="github" />
          </div>
        </div>
        <div className="programmationLanguages">
        <h1>Main Programming Languages</h1>
          <div className="languageContainer">
            <div className="languageRow">
              <img className="language" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="" />
              <img className="language" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
              <img className="language" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="" />
            </div>
            <div className="languageRow">
              <img className="language" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=F7DF1E" alt="" />
              <img className="language" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" />
              <img className="language" src="https://img.shields.io/badge/CSS3-2F80C1?style=for-the-badge&logo=css3&logoColor=F7DF1E" alt="" />
              <img className="language" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="" />    
            </div>
            <div className="languageRow">
              <img className="language" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="" />
              <img className="language" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="" />
              <img className="language" src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="" />
            </div>
          </div>
      </div>
      </div>
    <Footer />
    </div>
  );
};

export default Homepage;
