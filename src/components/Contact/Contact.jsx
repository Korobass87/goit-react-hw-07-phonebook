import React from 'react';
import './Contact.scss';
function Contact({ name, number, id, deletePost }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>tel: {number}</p>
      <button
        onClick={() => {
          deletePost(id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Contact;
