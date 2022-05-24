import Contact from 'components/Contact/Contact';
import React from 'react';
import { useGetContactsQuery } from '../Redux/Slice/SliceApi';

function ContactsList() {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(data);
  console.log(error);
  console.log(isLoading);
  return (
    <>
      {data &&
        data.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
    </>
  );
}

export default ContactsList;
