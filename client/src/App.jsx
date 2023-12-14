import * as C from "./App.styles";

// import "./App.css";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";
import Header from "./components/Header/Header";
import Progress from "./components/Progress/Progress";
import TodayTasks from "./components/TodayTasks/TodayTasks";

const App = () => {
  return (
    <C.Container>
      <Header />
      <C.Content >
        <CreateNewTask />
        <TodayTasks />
        <C.Divider  />
        <Progress />
        <CompletedTasks/>
      </C.Content>
    </C.Container>
  );
};

export default App;
