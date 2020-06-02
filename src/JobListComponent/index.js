import React from 'react';
import JobComponent from './JobComponent/'
import './JobListComponent.css'

const JobListComponent = ({jobs}) => {

	return (
		<>
			<div className='jobs-container'>
			{ jobs && 
				jobs.map((val) => <JobComponent title={val} />)
			}
			</div>
			
		</>
	);
};

export default JobListComponent;