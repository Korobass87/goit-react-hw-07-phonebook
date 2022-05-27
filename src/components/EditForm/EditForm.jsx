import React from 'react';
import { useState } from 'react';
import { useAddContactMutation } from '../Redux/Slice/SliceApi';
import './EditForm.scss';

export default function EditForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [add] = useAddContactMutation();

  const submitForm = e => {
    e.preventDefault();
    add({ name, number });
    setName('');
    setNumber('');
  };
  return (
    <div className="form-wrap">
      <form onSubmit={submitForm}>
        <label>
          <p>Name</p>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <p>Number</p>

          <input
            value={number}
            onChange={e => setNumber(e.target.value)}
            className="form-input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className="form-button" type="submit">
          <p> ADD</p>
        </button>
      </form>
    </div>
  );
}
