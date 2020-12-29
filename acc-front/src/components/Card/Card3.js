import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from '../ShowImage';
import './Card.css';
import '../Block2/Block2.css';

const Card3 = ({ product }) => {

	const showStock = quantity => {
		return quantity > 0 ? (
			<span className='badge badge-primary badge-pill block2-text3 white'>In Stock</span>
		) : (
			<span className='badge badge-primary badge-pill block2-text3 white'>Out of Stock</span>
		);
	}

	return (
			<div className='card'>
				<div className='card-body row bg-white'>
					<div className='col-4'>
						<ShowImage item={product} url='product' />
						{showStock(product.quantity)}
						<br/>
						<Link to={`/form`}>
							<button class="link dim br3 ph3 pv2 mt2 dib white bg-light-red block2-text3">Need Help?</button>
						</Link>
					</div>					
					<div className='col-8 text-left'>
						<div className='card-header card-header-12 font-weight-bold bg-yellow pl-3 mb-2'>{product.name}</div>
						<div className='card-content-12'>
							<p className='card-header mb-1'>{product.description}</p>
							<p className='mb-1 bg-black6'><span className='font-weight-bold'>ITEM ID: </span> {product.item}</p>
							<p className='mb-1'><span className='font-weight-bold'>CATEGORY: </span> {product.category.name}</p>
							<p className='mb-1'><span className='font-weight-bold'>COLOUR:</span> {product.colour}</p>
							<p className='mb-1'><span className='font-weight-bold'>MEASUREMENT:</span> {product.measurement}</p>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Card3;