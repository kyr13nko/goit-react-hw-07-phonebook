import { useDispatch, useSelector } from 'react-redux';

import {
  getContacts,
  getError,
  getFilter,
  getFilteredContacts,
  getIsLoading,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import { toast } from 'react-toastify';

import { List, Item, ContactValue, Button } from './ContactsList.styled';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onDeleteBtnClick = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted!');
  };

  return (
    <>
      {isLoading && <Loader />}

      {!error && !isLoading && contacts.length > 0 && (
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
      )}

      {error && !isLoading && (
        <div>
          Something went wrong. <br />
          Please try again later/
        </div>
      )}

      {!error && !isLoading && contacts.length === 0 && (
        <div>Your phone book is empty!</div>
      )}

      {filter && !isLoading && filteredContacts.length === 0 && (
        <div>
          No contacts found! <br /> Please change your search parameters and try
          again.
        </div>
      )}
    </>
  );
};

export default ContactsList;
