import * as C from "./styles";
import { useContext } from "react";
// import styles from "./TaskItem.module.css";
import { AppContext } from "../../AppContent";
import checkedIcon from "../../assets/icon-checked.svg";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const TaskItem = ({ task }) => {
  const { handleTaskEdit, handleTaskDelete } = useContext(AppContext);
  return (
    <C.Container
      // style={{ 
      //   background: `${task.done ? "rgba(47, 90, 255, 0.25)" : "#151a37"}`  , 
      //   border: `1px solid ${task.done ? "#2f5aff" : "#24293f"} `,
      // }}
    >
      <label>
        <C.InputCheckbox
          type="checkbox"
          checked={task.done}
          onChange={(e) => handleTaskEdit(task.id, e.target.checked)}
        />
        <C.CustomCheckbox
          // className={`${styles.customCheckbox} ${
          //   !task.done && styles.customCheckboxChecked
          // }`}
        >
          {task.done && (
            <C.CustomCheckboxChecked>
              <img src={checkedIcon} alt="Icone de marcação" />
            </C.CustomCheckboxChecked>
          )}
        </C.CustomCheckbox>
      </label>
      <C.TaskName>{task.name}</C.TaskName>

      <C.TrashButton
        onClick={() => handleTaskDelete(task.id)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6H19C19 5.44772 18.5523 5 18 5V6ZM6 6V5C5.44772 5 5 5.44772 5 6H6ZM7.0918 20.782L7.54579 19.891L7.0918 20.782ZM6.21799 19.908L5.32698 20.362H5.32698L6.21799 19.908ZM17.7822 19.908L16.8912 19.454L17.7822 19.908ZM16.9078 20.782L16.4538 19.891L16.9078 20.782ZM4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7V5ZM20 7C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5V7ZM16 6V7C16.5523 7 17 6.55228 17 6H16ZM8 6H7C7 6.55228 7.44772 7 8 7V6ZM15.8477 4.23462L16.7715 3.85194L15.8477 4.23462ZM14.7654 3.15224L15.1481 2.22836V2.22836L14.7654 3.15224ZM17 6V17.8H19V6H17ZM14.8002 20H9.2002V22H14.8002V20ZM7 17.8V6H5V17.8H7ZM6 7H18V5H6V7ZM9.2002 20C8.62367 20 8.25127 19.9992 7.96782 19.9761C7.69598 19.9538 7.59519 19.9161 7.54579 19.891L6.63781 21.673C7.01623 21.8658 7.40959 21.9371 7.80496 21.9694C8.18873 22.0008 8.65662 22 9.2002 22V20ZM5 17.8C5 18.3436 4.99922 18.8114 5.03057 19.195C5.06287 19.5904 5.13418 19.9836 5.32698 20.362L7.10899 19.454C7.0838 19.4046 7.04612 19.3039 7.02393 19.0322C7.00078 18.7488 7 18.3766 7 17.8H5ZM7.54579 19.891C7.35778 19.7952 7.20494 19.6424 7.10899 19.454L5.32698 20.362C5.61452 20.9264 6.07317 21.3853 6.63781 21.673L7.54579 19.891ZM17 17.8C17 18.3767 16.9993 18.7489 16.9762 19.0324C16.954 19.3041 16.9164 19.4047 16.8912 19.454L18.6732 20.362C18.8661 19.9835 18.9373 19.5902 18.9696 19.1949C19.0008 18.8113 19 18.3435 19 17.8H17ZM14.8002 22C15.3438 22 15.8115 22.0008 16.1951 21.9694C16.5904 21.9371 16.9835 21.8657 17.3618 21.673L16.4538 19.891C16.4043 19.9162 16.3036 19.9539 16.0321 19.9761C15.7489 19.9992 15.3767 20 14.8002 20V22ZM16.8912 19.454C16.7956 19.6417 16.6425 19.7948 16.4538 19.891L17.3618 21.673C17.9257 21.3856 18.3854 20.927 18.6732 20.362L16.8912 19.454ZM4 7H20V5H4V7ZM16 5H8V7H16V5ZM11 4H13V2H11V4ZM9 6C9 5.52038 9.00054 5.21074 9.01671 4.97375C9.03227 4.74575 9.05888 4.65891 9.07612 4.6173L7.22836 3.85194C7.09336 4.17787 7.04385 4.50778 7.02135 4.83761C6.99946 5.15846 7 5.54774 7 6H9ZM11 2C10.5477 2 10.1584 1.99946 9.8375 2.02135C9.50766 2.04385 9.17766 2.09334 8.85169 2.22836L9.61706 4.07612C9.65864 4.0589 9.7455 4.03227 9.97362 4.01671C10.2107 4.00054 10.5204 4 11 4V2ZM9.07612 4.6173C9.17771 4.37205 9.37225 4.17752 9.61706 4.07612L8.85169 2.22836C8.11639 2.53293 7.53275 3.11707 7.22836 3.85194L9.07612 4.6173ZM17 6C17 5.54768 17.0005 5.15841 16.9786 4.83752C16.9561 4.50766 16.9065 4.1778 16.7715 3.85194L14.9238 4.6173C14.941 4.65898 14.9677 4.74587 14.9832 4.97384C14.9994 5.21079 15 5.52044 15 6H17ZM13 4C13.4796 4 13.7893 4.00054 14.0262 4.01671C14.2542 4.03227 14.3411 4.05888 14.3827 4.07612L15.1481 2.22836C14.8221 2.09336 14.4922 2.04385 14.1624 2.02135C13.8415 1.99946 13.4523 2 13 2V4ZM16.7715 3.85194C16.4671 3.11693 15.8832 2.53288 15.1481 2.22836L14.3827 4.07612C14.6276 4.17758 14.8222 4.37219 14.9238 4.6173L16.7715 3.85194Z"
            fill="white"
          />
        </svg>
      </C.TrashButton>
    </C.Container>
  );
};

export default TaskItem;
