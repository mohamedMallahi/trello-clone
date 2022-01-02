import React, { useState } from 'react';
import List from './components/List';
import './style.css';

export default function App() {
  const [data, setData] = useState({
    one: [],
    two: [],
    three: [],
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Trello
          </a>
          <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Workspace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Recent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Starred
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                More
              </a>
            </li>
            <li>
              <button className="btn btn-warning">+</button>
            </li>
          </ul>
          <div>
          <input type="text" class="form-control" placeholder="Search"/>
          </div>
        </div>
      </nav>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-3 p-0">
            <List list={data.one} />
          </div>
          <div className="col-md-3 p-0 mx-2">
            <List list={data.two} />
          </div>
          <div className="col-md-3 p-0">
            <List list={data.three} />
          </div>
        </div>
      </div>
    </>
  );
}
