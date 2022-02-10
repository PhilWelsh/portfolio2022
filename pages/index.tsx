import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useSpring, useTrail, animated, config } from "react-spring";
import Head from "next/head";
import ProfilePic from "../components/ProfilePic";
import Portfolio from "../components/Portfolio";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FiMail } from "react-icons/fi";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";
import Tiles from "../components/Tiles";

//test for react-spring effects
const ResumeButton = () => {
  const [hover, setHover] = useState(false);
  const style = hover
    ? useSpring({
        loop: false,
        from: { transform: "translateY(0px)" },
        to: { transform: "translateY(-40px)" },
        config: { ...config.wobbly },
      })
    : useSpring({
        loop: false,
        from: { transform: "translateY(-20px)" },
        to: { transform: "translateY(0px)" },
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
      href="https://res.cloudinary.com/philwelsh/image/upload/v1644415143/philwelsh.com/philwelsh-cv-2022_f28lfx.pdf"
      className={styles.button}
      style={{ display: "inline-flex", overflow: "hidden" }}
      onMouseEnter={() => setHover(true)}
    >
      <span style={{ paddingTop: "5px" }}>See resume</span>
      <animated.div style={{ display: "inline-block", ...style }}>
        <HiOutlineDocumentDownload size={30} />
      </animated.div>
    </a>
  );
};

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 500, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} className={styles.trailsText} style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Phil Welsh Online Portfolio</title>
        <meta
          name="description"
          content="Generated by me, Phil Welsh (with help from Nextjs and React."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* favicon w. logo of w made from angle brackets */}
      </Head>
      <Header />
      <main className={styles.main}>
        {/* Reusable component for all parts of the site, left/right divide */}
        <section id="contact" className={styles.section}>
          <div>
            {/* Left Side */}
            <h1 className={styles.title}>Phil Welsh</h1>
            <Trail open={open}>
              <p className={styles.description}>
                Hi, I'm a web developer living in Toronto.
                <br />
                Mostly working in Front End and UI Development with React and
                Typescript.
              </p>
              <p>
                With 5+ years experience I have travelled and worked in the UK,
                China and Canada, for a range of different teams and projects.
              </p>
              <div>
                <ResumeButton />
              </div>
            </Trail>
          </div>
          <div>
            <div className={styles.profilePicContainer}>
              <ProfilePic />
            </div>
            <div className={styles.profileLinks}>
              <a className={styles.profileLink} href="linkedin">
                <FaLinkedinIn />
                <span>linkin.com/welshphil</span>
              </a>
              <a
                className={styles.profileLink}
                href="mailto:philwelsh3d@gmail.com"
              >
                <FiMail />
                <span>philwelsh3d@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className={styles.section}>
          <div>
            <h1>Skills</h1>
            <p>
              Soft skills, best practices, libraries, frameworks and software.
              As a T shaped developer I have experience in many areas, with a
              core strength in UX and front end development using ES6 and React.
              <br />
              <br />I love learning new tools and seeing how they can improve
              myself and the projects I'm working on.
              {/* did you know, interactive elements envourage a user to stay on a page resulting in a better ranking web page */}
            </p>
          </div>
          {/* hexagon icons for skills, light up and grow on hover */}
          <div>
            <Tiles />
          </div>
        </section>
        <section id="portfolio">
          <Portfolio />
          {/* <div>
            <h1>Portfolio</h1>
            <p>Highlight top skills and preferences</p>
            <span>click the arrows to see others</span>
          </div>
          <div>Roller for portfolio pieces</div> */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
