import styles from "../styles/Home.module.scss";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
