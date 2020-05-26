import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddJobComponent from './AddJobComponent'
import JobListComponent from './JobListComponent/'
import Header from './Header'

const App = () => {

  const [jobs, setJobs] = useState(['PS', 'OS', 'Machine Learning']);

  function pressHandler(newJob) {
    console.log(newJob);
    const newJobs = [...jobs, newJob];
    console.log(newJobs);
    setJobs(newJobs);
  }

  return (
    <>
      <Header />
      <AddJobComponent pressHandler={pressHandler}/>
      <JobListComponent jobs={jobs}/>
    </>
  );
}

const divStyle = {
  margin: 10,
};

export default App;
