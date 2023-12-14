import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1;
  grid-row: 2;
  margin-top: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 0 !important;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #24293f;
      margin: 24px 0;
    }
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TodayTasksMessage = styled.div`
  font-family: "Montserrat";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #fff;
  display: flex;
  justify-content: center;
`;