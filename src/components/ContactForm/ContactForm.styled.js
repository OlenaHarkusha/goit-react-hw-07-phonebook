import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 200px;

  padding: 5px;
  margin: 0 auto;
  background-color: #9494a2;
  color: inherit;
  border-radius: 5px;
  border: none;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
