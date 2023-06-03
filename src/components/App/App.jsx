import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { GlobalStyle } from '../GlobalStyles';
import { Container, Title } from './App.styled';

import { selectContacts, selectIsLoading } from 'redux/Selectors';
import { useSelector } from 'react-redux';
import { MagnifyingGlass } from 'react-loader-spinner';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>
        Contacts
        {isLoading && (
          <MagnifyingGlass
            visible={true}
            height="40"
            width="40"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#F3F3FA"
          />
        )}
      </Title>
      <Filter />
      {contacts && <ContactList />}
    </Container>
  );
};
