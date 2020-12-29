import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategory } from './apiAdmin';

const ManageCategories = ( ) => {

	const [categories, setCategories] = useState([]);

	const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategories(data);
            }
        });
    }

    const destroy = categoryId => {
        deleteCategory(categoryId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCategories();
            }
        });
    }

    useEffect(() => {
        loadCategories();
    }, []);

	return (
		<div>
			<Layout />
			<div className='row'>
				<div className="col-12">
                    <h2 className="text-center">
                        Total {categories.length} categories
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {categories.map((c, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{c.name}</strong>
                                <span
                                    onClick={() => destroy(c._id)}
                                    className="badge badge-danger badge-pill"
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
			</div>
		</div>	
	);
}

export default ManageCategories;