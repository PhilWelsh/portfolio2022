import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { GrLinkNext } from "react-icons/gr";

const portfolioPieces = [
  // { needs improving. (no pictures. bad styling.)
  //   title: "OnePiece laugh display",
  //   techUsed: ["React", "Redux", "Python"],
  //   description:
  //     "Inspired by an exhibit seen in Tokyo Tower to celebrate the series. As a fun test of Python, scraped a fan page describing the different onomatopeia for characters' unique laughs in this series with low res images and put them onto 2 sided card elements",
  //   link: "",
  //   imageSrc: "",
  // },
  {
    title: "Mandarin Study Cards",
    techUsed: ["React", "Redux", "Recoil", "Python"],
    description:
      "As a learner of Mandarin Chinese, I developed a way to separate the characters I needed to learn into groups based on commonality and test level. Using python to scrape and compile data from several sources. The cards can be modified, flipped and chunked into groups depending on the user's preference. A test mode is being built and currently styles and functionality is all filling base paramaters",
    link: "https://mandarin-char-test-game.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/philwelsh/image/upload/v1644190395/philwelsh.com/MandarinGameCapture_rpidkf.png",
  },
  // { needs fixing, minor styles. bug fix, can't search
  //   title: "Food finder app",
  //   techUsed: ["React", "Redux", "React Testing Library"],
  //   description:
  //     "Test of Redux and TDD. Using a linked REST API, uses React with Redux to match filter and search results to find food places nearby",
  //   link: "",
  //   imageSrc: "",
  // },
  {
    title: "Control Gap Website",
    techUsed: [
      "Photoshop",
      "XD",
      "Illustrator",
      "HTML",
      "CSS",
      "JS",
      "React",
      "Redux",
      "Gatsby",
      "Netlify",
      "Cloudinary",
      "AB Testing",
      "Google Analytics",
    ],
    description:
      "As part of the company, designed, sourced and altered images for, created wireframes, mockups, built, deployed and improved using A/B testing and Google Analytics",
    link: "https://www.controlgap.com",
    imageSrc:
      "https://res.cloudinary.com/philwelsh/image/upload/v1602948667/philwelsh.com/site-images/site-controlgap_wv0mml.jpg",
  },
  {
    title: "Mecca Bingo",
    techUsed: ["HTML", "CSS", "JS", "OrchardCMS"],
    description: "Work in team for big client",
    link: "https://www.meccabingo.com/",
    imageSrc:
      "https://res.cloudinary.com/philwelsh/image/upload/v1602948667/philwelsh.com/site-images/site-mecca_r102as.jpg",
  },
  {
    title: "Hadrian Technology",
    techUsed: [
      "XD",
      "Photoshop",
      "Illustrator",
      "HTML",
      "CSS",
      "JS",
      "DrupalCMS",
    ],
    description: "Design for local business, industry requirements",
    link: "http://www.hadriantechnology.co.uk/",
    imageSrc:
      "https://res.cloudinary.com/philwelsh/image/upload/v1602948667/philwelsh.com/site-images/site-hadrian_twditv.jpg",
  },
  // { now shopify, very different
  //   title: "Netvue",
  //   techUsed: ["HTML", "CSS", "JS"],
  //   description: "",
  //   link: "",
  //   imageSrc: "",
  // },
];

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
      {portfolioPieces.map((p) => (
        <>
          <hr />
          <div className={styles.portfolioSection}>
            <div>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div>
                {p.techUsed.map((t) => (
                  <span className={styles.tag}>{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" className={styles.button}>
                Check it out!
                <GrLinkNext />
              </a>
            </div>
            <div>
              {p.imageSrc && (
                <div className={styles.imageContainer}>
                  <Image src={p.imageSrc} layout="fill" />
                </div>
              )}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Portfolio;
