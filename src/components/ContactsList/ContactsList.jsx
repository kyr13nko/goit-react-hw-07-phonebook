import { useDispatch, useSelector } from 'react-redux';

import {
  // getError,
  // getFilter,
  getFilteredContacts,
  // getIsLoading,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import { toast } from 'react-toastify';

import { List, Item, ContactValue, Button } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();

  // const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);
  // const error = useSelector(getError);
  // const isLoading = useSelector(getIsLoading);

  const onDeleteBtnClick = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted!');
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactValue>
              {name}
              <span>{number}</span>
            </ContactValue>
            <Button type="button" onClick={() => onDeleteBtnClick(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
