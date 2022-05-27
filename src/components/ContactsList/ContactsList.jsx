import Contact from 'components/Contact/Contact';
import React, { useState } from 'react';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../Redux/Slice/SliceApi';
import './ContactsList.scss';

function ContactsList() {
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useGetContactsQuery();
  const [deletePost, { isLoading: isUpdating }] = useDeleteContactMutation();
  console.log(data);
  console.log(error);
  console.log(isLoading);
  const toLowFilter = filter.toLowerCase();
  const visibleContacts = data =>
    data.filter(cont => cont.name.toLowerCase().includes(toLowFilter));
  return (
    <>
      <div className="contact-section">
        <label htmlFor="">
          <p>search contact</p>
          <input
            className="filter-input"
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </label>
        <div className="contact-wrap">
          {data &&
            visibleContacts(data).map(contact => (
              <Contact
                deletePost={deletePost}
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default ContactsList;
