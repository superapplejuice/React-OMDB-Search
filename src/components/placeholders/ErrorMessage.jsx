import React from 'react';

const ErrorMessage = ({ errorMessage }) => {
	return (
		<div className="ui negative message">
			<div className="header">An error has occured</div>
			<p>{errorMessage}</p>
		</div>
	);
};

export default ErrorMessage;
