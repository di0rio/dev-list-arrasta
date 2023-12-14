// import styles from "./Title.module.css";
import * as C from "./styles";

const Title = ({ text, iconName }) => {
  const imgUrl = new URL(`/src/assets/icon-${iconName}.svg`, import.meta.url)
    .href;
  return (
    <C.Container>
      <C.Icon>
        <img src={imgUrl} alt="" />
      </C.Icon>
      <C.Title>{text}</C.Title>
    </C.Container>
  );
};

export default Title;
