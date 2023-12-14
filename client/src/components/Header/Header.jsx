import * as C from "./styles";
// import styles from "./Header.module.css";
import linkedin from "../../assets/logo-linkedin.svg";
import github from "../../assets/logo-github.svg";
import telegram from "../../assets/logo-telegram.svg";

const Header = () => {
  return (
    <C.Header>
      <C.Container>
        <C.Title>To-Do List</C.Title>
        <C.SocialMedia>
            <C.Link href="https://linkedin.com" target="blank" rel="noopener noreferrer">
              <img src={linkedin} alt="" />
            </C.Link>
            <C.Link  href="https://github.com" target="blank" rel="noopener noreferrer">
              <img src={github} alt="" />
            </C.Link>
            <C.Link  href="https://t.me" target="blank" rel="noopener noreferrer">
              <img src={telegram} alt="" />
            </C.Link>
        </C.SocialMedia>
      </C.Container>
    </C.Header>
  );
};

export default Header;
