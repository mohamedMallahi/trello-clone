import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="container py-3">
      <h3 className="display-4 text-center">TODO</h3>
      <div className="row">
        <div className="col-md-4 p-0">
          <TodoList items={items} />
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="row w-100 m-0">
              <div className="col-sm-10 p-0">
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: '0px' }}
                  id="new-todo"
                  onChange={handleChange}
                  value={text}
                  placeholder="What needs to be done?"
                />
              </div>
              <div className="col-sm-2 p-0">
                <button
                  className="btn btn-primary d-block w-100"
                  style={{ borderRadius: '0px' }}
                >
                  Add #{items.length + 1}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 p-0">
          <TodoList items={items} />
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="row w-100 m-0">
              <div className="col-sm-10 p-0">
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: '0px' }}
                  id="new-todo"
                  onChange={handleChange}
                  value={text}
                  placeholder="What needs to be done?"
                />
              </div>
              <div className="col-sm-2 p-0">
                <button
                  className="btn btn-primary d-block w-100"
                  style={{ borderRadius: '0px' }}
                >
                  Add #{items.length + 1}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 p-0">
          <TodoList items={items} />
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="row w-100 m-0">
              <div className="col-sm-10 p-0">
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: '0px' }}
                  id="new-todo"
                  onChange={handleChange}
                  value={text}
                  placeholder="What needs to be done?"
                />
              </div>
              <div className="col-sm-2 p-0">
                <button
                  className="btn btn-primary d-block w-100"
                  style={{ borderRadius: '0px' }}
                >
                  Add #{items.length + 1}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

const TodoList = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};
