import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Form from './components/FormContainer.jsx';
import Users from './components/UsersContainer.jsx';
import Total from './components/TotalContainer.jsx';



const App = () =>  {

  return (
    <div className="App">
      <div className="container">
        <Form />
        <Users />
        <Total />
      </div>
    </div>
  );
}

export default connect(null)(App);
