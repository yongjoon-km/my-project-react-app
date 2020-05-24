import React from 'react'

const header = {
	backgroundColor: '#777',
	padding: 30,
};

const headerText = {
	color: 'white',
	fontWeight: 'bold',
	fontSize: '30px',
}

const Header = () => {

	return (
		<div style={header}>
			<text style={headerText}> My Project </text>
		</div>
	);
}

export default Header;