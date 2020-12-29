import React from 'react';
import Layout from '../components/Layout';
import AddCategory from './AddCategory';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

	const adminLinks = () => {
		return (
			<div className='card'>
				<h4 className='card-header'>Admin Links</h4>
				<ul className='list-group'>
					<li className='list-group-item'>
						<Link to='/create/category' className='nav-link'>Create Category</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/create/product' className='nav-link'>Create Product</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/admin/products' className='nav-link'>Manage Products</Link>
					</li>
					<li className='list-group-item'>
						<Link to='/admin/categories' className='nav-link'>Manage Categories</Link>
					</li>
				</ul>
			</div>
		);
	}

	return (
		<div>
			<Layout />
			<div className='row'>
				<div className='col-3'>
					{adminLinks()}
				</div>
			</div>
		</div>
	);
}



export default AdminDashboard;