import styled from 'styled-components';

// Header
export const Header = styled.header`
  border-bottom: 1px solid #151a37;
`;

// Container
export const Container = styled.div`
  max-width: 1248px;
  padding: 20px 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

// Title
export const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  line-height: 1;
`;

// SocialMedia
export const SocialMedia = styled.div`
  display: flex;
  gap: 1.45rem;
`;

// Link
export const Link = styled.a`
  width: 40px;
  height: 40px;
  background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
  border: 1px solid #24293f;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.15);
  }
`;
