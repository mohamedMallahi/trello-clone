import React, { useState, useRef } from 'react';
import Form from './Form'

const List = ({ list }) => {
  const [items, setItems] = useState(list)
  const [text, setText] = useState('');

  const listRef = useRef()

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


  const dragStartHandler = (e) => {
    e.target.classList.add('dragging')
  }

  const dragEndHandler = (e) => {
    e.target.classList.remove('dragging')
  }

  const dragOverHandler = (e) => {
    e.preventDefault()
    console.log('drag over')
    const draggable = document.querySelector('.dragging')
    console.log(draggable)
    listRef.current.appendChild(draggable)
  }

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }

  return (
    <div>
      <ul className="list-group draggable" onDragOver={dragOverHandler} ref={listRef}>
        {items.map((item) => (
          <li className="list-group-item" key={item.id} draggable='true' onDragStart={dragStartHandler} onDragEnd={dragEndHandler}>
            {item.text}
          </li>
        ))}
      </ul>
      <Form submitHandler={submitHandler} changeHandler={changeHandler} text={text} />
    </div>
  );
};

export default List;
