import { useContext, useState } from "react";
import Title from "../Title/Title";
// import styles from "./CreateNewTask.module.css";
import * as C from "./styles";
import addIcon from "../../assets/icon-add.svg";
import { AppContext } from "../../AppContent";

const CreateNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const {handleAddTask} = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length) {
      handleAddTask(inputValue);
      setInputValue("");
    } else setError(true);
  };

  const handleChange = (e) => {
    if (error) setError(false);
    setInputValue(e.target.value);
  };
  
  return (
    <C.Container>
      <Title iconName={"pencil"} text={"Criar nova tarefa"} />
      <C.InputContainer onSubmit={handleSubmit}>
        <C.Input
          value={inputValue}
          onChange={handleChange}
          autoFocus
          placeholder="Nome da tarefa"
          type="text"
        />
        <C.Button type="submit">
          <img src={addIcon} alt="Adicionar tarefa" />
        </C.Button>
      </C.InputContainer>
    </C.Container>
  );
};

export default CreateNewTask;
