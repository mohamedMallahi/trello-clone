import React from 'react';

const Form = ({ submitHandler, changeHandler, text }) => {
  return (
    <form className="w-100" onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control"
        style={{ borderRadius: '0px' }}
        id="new-todo"
        onChange={changeHandler}
        value={text}
        placeholder="What needs to be done?"
      />

      <button
        className="btn btn-primary d-block w-100"
        style={{ borderRadius: '0px' }}
      >
        + Add a card
      </button>
    </form>
  );
};

export default Form;
