

import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am an Animal Biology student studying at University of Tehran. I enjoy conducting research across various biology domains and use programming to enhance my research outcomes.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "C/C++, C#, Python, R, SQL",
  ".NET, ML.NET, Xamarin",
  "Adobe Indesign",
  "Adobe Photoshop",
  "CorelDraw",
  "Web design",
  "PCR, DNA/RNA Extraction",
  "Primer Design, Nanodrop",
  "Oligo7, SPSS, NCBI, BLAST",
  "BioEdit, GenoPro",
  "Bacteria/Cell/Tissue Culture",
  "Bacteria/Cell Counting",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new and creative ways to drive innovation, particularly in the field of biology. By leveraging my research and programming experience, I am continually dedicated to learning and exploring novel approaches to advance biological knowledge and pioneer groundbreaking solutions. I am also a strong believer in the power of teamwork and collaboration to achieve goals and drive success.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
