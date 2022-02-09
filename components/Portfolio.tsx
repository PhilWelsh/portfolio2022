import React, { Fragment } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { GrLinkNext } from "react-icons/gr";
import { useSpring, animated, config } from "react-spring";
import { useState, useEffect } from "react";

const CheckItOutButton = ({ link }) => {
  const [hover, setHover] = useState(false);
  const style = hover
    ? useSpring({
        loop: false,
        from: { transform: "translateX(0px)" },
        to: { transform: "translateX(-5px)" },
        config: { ...config.wobbly },
      })
    : useSpring({
        loop: false,
        from: { transform: "translateX(0px)" },
        to: { transform: "translateX(5px)" },
        config: { ...config.wobbly },
      });

  useEffect(() => {
    if (!hover) {
      return;
    }
    window.setTimeout(() => {
      setHover(false);
    }, 200);
  }, [hover]);
  return (
    <a
      href={link}
      target="_blank"
      className={styles.button}
      style={{ display: "inline-flex", overflow: "hidden" }}
      onMouseEnter={() => setHover(true)}
    >
      <span>Check it out!</span>
      <animated.div style={{ display: "inline-block", ...style }}>
        <GrLinkNext />
      </animated.div>
    </a>
  );
};

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
    techUsed: ["HTML", "JS", "React", "Redux", "Python", "JSS"],
    description: (
      <>
        As a learner of Mandarin Chinese, I developed a way to separate the
        characters I needed to learn into groups based on commonality and test
        level.
        <br />
        <br />
        Used python to scrape and compile data from several sources. Cards and
        test groups can be modified at the user's preference.
        <br />
        In development.
      </>
    ),
    link: "https://mandarin-char-test-game.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/philwelsh/image/upload/v1644348013/philwelsh.com/site-images/MandarinGameCapture_wksjox.png",
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
      "JSS",
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
      "https://res.cloudinary.com/philwelsh/image/upload/v1644348133/philwelsh.com/site-images/CGCapture_lxkpf5.png",
  },
  {
    title: "Mecca Bingo",
    techUsed: ["HTML", "SCSS", "JS", "OrchardCMS"],
    description:
      "As part of a large international team for a big client. Revised changes for and built new features for website as well as configuring CMS",
    link: "https://www.meccabingo.com/",
    imageSrc:
      "https://res.cloudinary.com/philwelsh/image/upload/v1644347621/philwelsh.com/site-images/MeccaCapture_dj11nn.png",
  },
  {
    title: "Hadrian Technology",
    techUsed: [
      "XD",
      "Photoshop",
      "Illustrator",
      "HTML",
      "SCSS",
      "JS",
      "DrupalCMS",
    ],
    description:
      "One of many sites built for local businesses, consulted, created wireframes, mockups, accomodated revisions before building in HTML, CSS, and JS. Sourced and edited images for home page and attached to CMS.",
    link: "http://www.hadriantechnology.co.uk/",
    imageSrc:
      "https://res.cloudinary.com/philwelsh/image/upload/v1644347621/philwelsh.com/site-images/HadrianCapture_saeupa.png",
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
        <Fragment key={p.title}>
          <hr />
          <div className={styles.portfolioSection}>
            <div>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div>
                {p.techUsed.map((t) => (
                  <span
                    className={styles.tag}
                    dangerouslySetInnerHTML={{ __html: t }}
                  />
                ))}
              </div>
              <CheckItOutButton link={p.link} />
            </div>
            <div>
              {p.imageSrc && (
                <a
                  href={p.link}
                  target="_blank"
                  className={styles.imageContainer}
                >
                  <Image src={p.imageSrc} layout="fill" />
                </a>
              )}
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Portfolio;
