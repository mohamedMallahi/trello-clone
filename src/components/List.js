import React from 'react';
import Form from './Form'

const List = ({ items }) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      <Form submitHandler={} changeHandler={} />
    </div>
  );
};

export default List;
