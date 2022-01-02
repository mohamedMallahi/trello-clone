import React, {useState} from 'react';
import Form from './Form'

const List = ({ list }) => {
  const [items, setItems] = useState(list)
  const [text, setText] = useState('');

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(items)
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now(),
    };
    setItems((prevItems) => prevItems.concat(newItem));
    setText('');
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      <Form submitHandler={submitHandler} changeHandler={changeHandler} text={text} />
    </div>
  );
};

export default List;
