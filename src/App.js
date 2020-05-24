import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddWorkDone from './AddWorkDone'
import Header from './Header'
import CalendarGraph from './CalendarGraph'

const App = () => {
  return (
    <>
      <Header />
      <AddWorkDone />
      <CalendarGraph />
    </>
  );
}

const divStyle = {
  margin: 10,
};

export default App;
