import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AddJobComponent from './AddJobComponent'
import JobListComponent from './JobListComponent/'
import Header from './Header'

const App = () => {

  const [jobs, setJobs] = useState();

  useEffect(() => {
    load_data();
  }, []);

  async function load_data() {
    const response = await fetch('http://localhost:5000/api/jobs');
    const data = await response.json();
    const newJobs = data.map((item) => item['job_name']);
    setJobs(newJobs);
  }

  async function pressHandler(newJob) {  
    const data = {
      job_name : newJob
    };
    const res = await fetch(`http://localhost:5000/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      // TODO: add pop-up message
      console.log(await res.json());
    } else {
      await load_data();
    }
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
