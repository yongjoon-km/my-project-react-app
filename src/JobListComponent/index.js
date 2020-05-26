import React from 'react';
import JobComponent from './JobComponent/'

const container = {
	display: 'flex',
	justifyContent: 'center',
	padding: 10,
}

const JobListComponent = ({jobs}) => {

	return (
		<>
			<div style={container}>
			{ jobs && 
				jobs.map((val) => <JobComponent title={val} />)
			}
			</div>
			
		</>
	);
};

export default JobListComponent;