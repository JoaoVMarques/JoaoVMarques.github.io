import { Component } from "react";
import java from "./imgs/javascript.png";
import html from "./imgs/html.png";
import react from "./imgs/react.png";
import git from "./imgs/git.png";
import boostrap from "./imgs/bootstrap.png";
import csharp from "./imgs/csharp.png";
import nodejs from "./imgs/nodejs.png";
import python from "./imgs/python.png";
import "./about.css";

class About extends Component {
  render() {
    return (
      <section className="About-Section">
        <h1 className="About-Title">Sobre Mim</h1>
        <article>
          <h2 className="Sub-Title-About blue">Um pouco sobre mim</h2>
          <p className="about-text">
            Eu sou um desenvolvedor Front-End, Tenho um sonho desde criança por
            programação, Graças a Trybe isso está deixando de ser um sonho para
            ser realidade. Atualmente estou aprendendo sobre Front-End e tenho
            interesse também em Back-End. Sempre tentando inovar e aprendendo
            novas tecnologias.
          </p>
        </article>
        <div>
          <h2 className="Sub-Title-About blue">Ferramentas e Skills</h2>
          <div className="tools-container">
            <div className="skill-container">
              <img className="skills-img" src={java} alt="" />
              <span className="skill-name">Javascript</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={html} alt="" />
              <span className="skill-name">Html</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={react} alt="" />
              <span className="skill-name">React js</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={git} alt="" />
              <span className="skill-name">Git</span>
            </div>
          </div>
          <div className="tools-container">
            <div className="skill-container">
              <img className="skills-img" src={nodejs} alt="" />
              <span className="skill-name">NodeJs</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={csharp} alt="" />
              <span className="skill-name">C#</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={python} alt="" />
              <span className="skill-name">Python</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={boostrap} alt="" />
              <span className="skill-name">Boostrap</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
