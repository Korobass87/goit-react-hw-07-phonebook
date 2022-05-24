import React from 'react';

function Contact({ name, number }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
    </div>
  );
}

export default Contact;
