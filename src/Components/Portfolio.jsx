/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Biology grid.jpg";

const imageAltText = "A image with Fish, DNA, Bioinformatics, and Programming.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Zoology Museum of University of Tehran", 
    description:
      "I am currently working on a project to digitize the Zoology Museum of University of Tehran. This project will allow researchers to access the museum's collection online and will also allow the museum to be more accessible to the public.",
    url: "https://zoologymuseum.ut.ac.ir/en/people/",
  },
  {
    title:
      'Conducted research on "Breeding and maintenance of guppy fish and investigation of sex change in females"',
    description:
      'Conducted extensive research on "Breeding and maintenance of guppy fish" while also delving into the intriguing phenomenon of sex change in female guppies. Explored the intricacies of guppy biology, contributing valuable insights to the field of aquatic science.',
    url: "https://aafbuniversitygit.github.io/MyProjects/project-pages/Guppy-Fish-Project.html",
  },
  {
    title: "Biology Student Association of Tehran University",
    description:
      "As the head of the Biology Student Association of Tehran University, I am responsible for organizing events and activities for the biology students of Tehran University. I am also responsible for managing the association's website and social media accounts.",
    url: "https://denasj.ut.ac.ir/?lang=en",
  },
  {
    title: 'Managed "Breeding and Maintenance of Gambusia Fish" Study',
    description:
      "Managed a study on the breeding and maintenance of Gambusia fish. This study was conducted to determine the optimal conditions for breeding and maintaining Gambusia fish in captivity. This experiment is currently being conducted at the University of Tehran.",
    url: "https://aafbuniversitygit.github.io/MyProjects/project-pages/Gambusia-Fish-Project.html",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
