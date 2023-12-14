import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 135%;
  font-weight: 400;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
  border-radius: 12px;
  border: 1px solid #24293f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
