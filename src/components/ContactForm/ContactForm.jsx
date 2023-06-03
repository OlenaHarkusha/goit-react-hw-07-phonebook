import { Button, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { fetchContacts, postContact } from 'redux/Operations';
import { selectContacts } from 'redux/Selectors';
import { useEffect } from 'react';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  console.log('contacts form', contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const number = e.target.number.value;
    const normalizedName = name.toLowerCase();

    if (isInContacts(normalizedName)) {
      toast.error(`${name} is already in Contacts`);
      return;
    }
    dispatch(postContact({ name, number }));
    form.reset();
  };

  const isInContacts = name => {
    return contacts.some(item => item.name.toLowerCase().includes(name));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
