import Contact from 'components/Contact/Contact';
import React from 'react';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../Redux/Slice/SliceApi';
import './ContactsList.scss';

function ContactsList() {
  const { data, error, isLoading } = useGetContactsQuery();
  const [
    deletePost, // This is the mutation trigger
    { isLoading: isUpdating }, // This is the destructured mutation result
  ] = useDeleteContactMutation();
  console.log(data);
  console.log(error);
  console.log(isLoading);
  return (
    <>
      <div className="contact-section">
        <div className="contact-wrap">
          {data &&
            data.map(contact => (
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
