import React, { useState } from 'react'


const workInput = {
	margin: 10,
	borderRadius: 10,
	height: 30,
}

const container = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}


const AddJobComponent = ({pressHandler}) => {

	const [title, setTitle] = useState('');

	return (
		<div style={container}>
			<input 
				placeholder='add job title' 
				style={workInput} 
				onChange={(evt) => {
					setTitle(evt.target.value)
				}
			}/>
			<button onClick={() => {
				setTitle('');
				pressHandler(title);
				}}>new</button>
		</div>
	);
};

export default AddJobComponent;