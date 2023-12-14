import styled from "styled-components";

export const Container = styled.div`
  max-width: 520px;
  grid-column: 2;
  grid-row: 1;
  align-self: end;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #24293f;
    margin: 24px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    grid-column: 1;
    grid-row: 3;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #282e4f;
  border-radius: 2px;
`;

export const ProgressBarFill = styled.input`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  accent-color: #40fb72;
  box-shadow: 0px 0px 12px 4px rgba(64, 251, 114, 0.25);
  transition: width 0.8s;
`;

export const ProgressBarValues = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const ProgressBarValue = styled.span`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 8px;
  font-family: "Montserrat";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  color: #fff;
`;

export const TaskCompletedMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(64, 251, 114, 0.25);
  border: 1px solid #40fb72;
  border-radius: 8px;
  padding: 16px;
  max-width: 324px;
  height: 80px;
  margin: 24px auto 32px;
`;

export const TaskCompletedMessageText = styled.span`
  font-family: "Montserrat";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #fff;
`;
