import React, { useState, useEffect, useRef } from 'react';
import '../styles/Search.css';

const Search = props => {
	const [term, setTerm] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleSubmit = event => {
		event.preventDefault();
		props.searchTerm(term);
	};

	const renderComponent = () => {
		return (
			<form className="search-form ui form" onSubmit={handleSubmit}>
				<div className="field">
					<label>Search for your favourite movies!</label>
					<input
						type="text"
						ref={inputRef}
						placeholder="Search"
						onChange={event => setTerm(event.target.value)}
						value={term}
					/>
				</div>
			</form>
		);
	};

	return <>{renderComponent()}</>;
};

export default Search;
