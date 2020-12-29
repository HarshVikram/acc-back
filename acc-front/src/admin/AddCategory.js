import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { createCategory } from './apiAdmin';

const AddCategory = ( ) => {
	const [name, setName] = useState('');
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleChange = (event) => {
		setError('');
		setName(event.target.value);
	}

	const clickSubmit = (event) => {
		event.preventDefault()
		setError('');
		setSuccess(false);
		createCategory({ name })
			.then(data => {
				if (data.error) {
					setError(data.error);
				} else  {
					setError('');
					setSuccess(true);
				}
			});
	}

	const newCategoryForm = () => {
		return (
			<form onSubmit={clickSubmit}>
				<div className='form-group'>
				  <label className='text-muted'>Name</label>
				  <input type="text" className='form-control' onChange={handleChange} value={name} autoFocus required />
				</div>
				  <button className='btn btn-outline-primary'>Create Category</button>				
			</form>
		);
	}

	const showSuccess = () => {
		if (success) {
			return <h4 className='text-success'>{name} is created.</h4>
		}
	}

	const showError = () => {
		if (error) {
			return <h4 className='text-danger'>Category should be unique.</h4>
		}
	}

	const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard/Canvas@123" className="text-secondary">
                Back to Dashboard
            </Link>
        </div>
    );

	return (
		<div>
			<Layout />
			<div className='row'>
				<div className='col-md-8 offset-md-2'>
					{showSuccess()}
					{showError()}
					{newCategoryForm()}
					{goBack()}
				</div>
			</div>
		</div>
	);
}

export default AddCategory;