import React, { useState, useEffect } from 'react';
import './main.css';

const Checkbox = ({ categories, handleFilters }) => {

	const [checked, setChecked] = useState([]);

	const handleToggle = c => () => {
		const currentCategoryId = checked.indexOf(c);
		const newCheckedCategoryId = [...checked];
		if (currentCategoryId === -1) {
			newCheckedCategoryId.push(c);
		} else {
			newCheckedCategoryId.splice(currentCategoryId, 1);
		}
		setChecked(newCheckedCategoryId);
		handleFilters(newCheckedCategoryId);
 	}

	return categories.map((c, i) => (
		<li key={i} className='list-unstyled text-left ml-2'>
			<input onChange={handleToggle(c._id)} value={checked.indexOf(c._id === -1)} type=
			"checkbox" className='form-check-input text-left' />
			<label className='form-check-label block2-text2 '>{c.name}</label>
		</li>
	));
}

export default Checkbox;