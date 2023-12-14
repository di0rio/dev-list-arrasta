import * as C from "./styles";
import { useContext } from "react";
import { AppContext } from "../../AppContent";
import imgUrl from "../../assets/img-trophy-min.png";
import Title from "../Title/Title";

const Progress = () => {
  const { progressBarValue } = useContext(AppContext);
  return (
    <C.Container>
      <Title iconName={"chart"} text={"Progresso"} />
      <C.ProgressBarFill
        readOnly
        type="range"
        value={progressBarValue}
      />
      <C.ProgressBarValue>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </C.ProgressBarValue>
      {progressBarValue === 100 && (
        <C.TaskCompletedMessage>
          <img src={imgUrl} alt="Troféu" width="40" height="40" />
          <span>Parabéns! Você completou todas as tarefas de hoje!</span>
        </C.TaskCompletedMessage>
      )}
    </C.Container>
  );
};


export default Progress;
