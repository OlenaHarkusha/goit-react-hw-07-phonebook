import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px) brightness(120%);

  padding: 50px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 40px;
`;
