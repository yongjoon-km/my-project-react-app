import React, { useState } from 'react';
import { Document, Page } from 'react-pdf'


const PDFView = ({ file }) => {
	const [numPages, setNumPages] = useState(null);
	const [pages, setPages] = useState([]);
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	return (
		<>
			<Document
				file={file}
				onLoadSuccess={onDocumentLoadSuccess}
				onLoadError={(err) => console.log(err)} >
				{
					([...Array(numPages).keys()]
						.map((num) => <Page pageNumber={num + 1} />))
				}
			</Document>
		</>

	);
}

export default PDFView;