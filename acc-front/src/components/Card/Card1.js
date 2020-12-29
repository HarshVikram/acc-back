import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from '../ShowImage';
import './Card.css';

const Card1 = ({ product }) => {

	const showStock = quantity => {
		return quantity > 0 ? (
			<span className='badge badge-primary badge-pill block2-text3 white'>In Stock</span>
		) : (
			<span className='badge badge-primary badge-pill block2-text3 white'>Out of Stock</span>
		);
	}

	return (
		<div className='col-4'>
			<div className='card'>
				<div className='card-body bg-white'>
					<div className='card-header block2-text2 bg-yellow mb-2'>{product.name}</div>
					<ShowImage item={product} url='product' />					
					<div className='card-content block2-text3 mt-2 text-left'>
						<p className='card-header'>{product.description.substring(0,50)}...</p>
						<p><span className='font-weight-bold'>COLOUR: </span>{product.colour}</p>
						<p><span className='font-weight-bold'>ITEM ID: </span>{product.item}</p>
					</div>
					<Link to={`/product/${product._id}`}>
						<button class="link dim br3 ph3 pv2 mt2 dib white bg-gold block2-text3">View Product</button>
					</Link>
					<br/>
					{showStock(product.quantity)}
				</div>
			</div>
		</div>
	);
}

export default Card1;