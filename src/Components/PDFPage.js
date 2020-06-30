import React from 'react';
import PDFView from './PDFView';
import sample from './sample.pdf';

const PDFPage = ({ title }) => {
	return (
		<>
			<h1>{title}</h1>
			<PDFView file={sample} />
		</>
	);
}

export default PDFPage;