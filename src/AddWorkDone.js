import React from 'react'


const workInput = {
	margin: 10,
}

const container = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

const AddWorkDone = () => {

	return (
		<div style={container}>
			<input placeholder='input what you done' style={workInput}/>
			<button>new</button>
		</div>
	);
};

export default AddWorkDone;