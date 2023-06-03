import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ContactsWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  width: 100px;
  margin-left: 10px;
  background-color: #9494a2;
  color: inherit;
  border-radius: 5px;
  border: none;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
