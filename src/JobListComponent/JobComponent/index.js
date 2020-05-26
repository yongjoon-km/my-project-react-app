import React from 'react';
import './JobComponent.css'

const JobComponent = ({title}) => {

	return (
		<div className='container'>
			<text>{title}</text>
		</div>
	);
};

export default JobComponent;