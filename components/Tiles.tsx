import styles from "../styles/Home.module.scss";
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

const Tiles = () => (
  <div className={styles.tiles}>
    <DiHtml5 />
    <DiCss3 />
    <DiSass />
    <DiBootstrap />
    <SiMaterialui />
    <SiAntdesign />
    <SiJss />
    <DiJavascript />
    <SiTypescript />
    <DiNodejsSmall />
    <DiReact />
    <SiReactrouter />
    <SiRedux />
    <SiNextdotjs />
    <SiVercel />
    <SiGatsby />
    <SiTestinglibrary />
    <SiJest />
    <DiScrum />
    <DiPostgresql />
    <SiGraphql />
    <SiDrupal />
    <SiContentful />
    <SiNetlify />
    <SiJira />
    <SiBitbucket />
    <SiTrello />
    <SiGithub />
    <SiAdobephotoshop />
    <SiAdobeillustrator />
    <SiAdobexd />
    <SiAdobeaftereffects />
    <SiAdobeacrobatreader />
    <SiAutodesk />
    {/* <GoSearch/> SEO */}
    {/* {values.map((v) => (
      <Tile key={v.name} name={v.name} src="" />
    ))} */}
  </div>
);
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
