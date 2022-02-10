import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import {
  DiJavascript,
  DiCss3,
  DiSass,
  DiHtml5,
  DiReact,
  DiBootstrap,
  DiNodejsSmall,
  DiScrum,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTypescript,
  SiMaterialui,
  SiAntdesign,
  SiJss,
  SiReactrouter,
  SiRedux,
  SiVercel,
  SiNextdotjs,
  SiGatsby,
  SiTestinglibrary,
  SiJest,
  SiGraphql,
  SiDrupal,
  SiContentful,
  SiNetlify,
  SiJira,
  SiBitbucket,
  SiTrello,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobeaftereffects,
  SiAdobeacrobatreader,
  SiAutodesk,
} from "react-icons/si";
import { GoSearch } from "react-icons/go";

const values = [
  <DiCss3 key={1} />,
  <DiHtml5 key={2} />,
  <DiSass key={3} />,
  <DiBootstrap key={4} />,
  <SiMaterialui key={5} />,
  <SiAntdesign key={6} />,
  <SiJss key={7} />,
  <DiJavascript key={8} />,
  <SiTypescript key={9} />,
  <DiNodejsSmall key={10} />,
  <DiReact key={11} />,
  <SiReactrouter key={12} />,
  <SiRedux key={13} />,
  <SiNextdotjs key={14} />,
  <SiVercel key={15} />,
  <SiGatsby key={16} />,
  <SiTestinglibrary key={17} />,
  <SiJest key={18} />,
  <DiScrum key={19} />,
  <DiPostgresql key={20} />,
  <SiGraphql key={21} />,
  <SiDrupal key={22} />,
  <SiContentful key={23} />,
  <SiNetlify key={24} />,
  <SiJira key={25} />,
  <SiBitbucket key={26} />,
  <SiTrello key={27} />,
  <SiGithub key={28} />,
  <SiAdobephotoshop key={29} />,
  <SiAdobeillustrator key={30} />,
  <SiAdobexd key={31} />,
  <SiAdobeaftereffects key={32} />,
  <SiAdobeacrobatreader key={33} />,
  <SiAutodesk key={34} />,
  <GoSearch key={35} />,
];
const Tiles = () => {
  const totalItems = 35;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomIndex = () => {
    const randFunc = () => Math.floor(Math.random() * totalItems) + 1;
    let newRandomIndex = randFunc();
    while (newRandomIndex === target) {
      newRandomIndex = randFunc();
    }

    return newRandomIndex;
  };

  const [color, setColor] = useState(randomColor);
  const [target, setTarget] = useState(0);
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setTarget(randomIndex());
      setColor(randomColor);
    }, 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, [target]);
  return (
    <div className={styles.tiles}>
      {values.map((v, i) => (
        <div
          className={i + 1 == target ? styles.targetTile : ""}
          style={{
            color: i + 1 == target ? `#${color}` : "white",
          }}
        >
          {v}
        </div>
      ))}
      {/* <div>
      <DiHtml5 />
    </div>
    <div>
      <DiCss3 />
    </div> */}
    </div>
  );
};
// div span
// position: absolute;
// bottom: -7px;
// left: 0;
// right: 0;
// margin: auto;
// text-align: center;
// background: #1d1d1f69;
// font-size: 12px;

export default Tiles;
