import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../apiCore';
import ShowImage from '../ShowImage';
import Card1 from '../Card/Card1';
import './Block2.css';

const Block2 = () => {
	
	const [productsBySell, setProductsBySell] = useState([]);
	const [error, setError] = useState(false);

	const loadProductsBySell = () => {
		getProducts('sold').then(data => {
			if (data.error) {
				setError(data.error);
			} else {
				setProductsBySell(data)
			}
		})
	}

	useEffect(() => {
		loadProductsBySell();
	}, [])

	return (
		<div className='block2 mt-5'>
			<div>
				<header className='block2-text1 pa3'>Our Products and Services</header>
			</div>
			<div className='row'>
				{ productsBySell.map((product, i) => (
					<Card1 key={i} product={product} />				
				)) }
			</div>

			<div className='block2-text2 pa4'>
				<Link to='/shop' style={{ color:'white', textDecoration: 'none' }}>
					<button class="f6 link dim br3 ph3 pv2 mb2 dib white bg-gold" href="#0">View all Products</button>
				</Link>
			</div>
		</div>
	);
}

export default Block2;