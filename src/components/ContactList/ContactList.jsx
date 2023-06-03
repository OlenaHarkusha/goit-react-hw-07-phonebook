import { Button, Contact, ContactsWrapper, List } from './ContsctList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Operations';
import { selectVisibleContatcs } from 'redux/Selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContatcs);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(item => (
        <Contact key={item.id}>
          <ContactsWrapper>
            <img src={item.avatar} alt="avatar" width="50" />
            {item.name}: {item.number}
          </ContactsWrapper>

          <Button
            type="button"
            id={item.id}
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
};
