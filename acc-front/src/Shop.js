import React, { useState, useEffect } from 'react';
import Layout from './components/Layout.js';
import Footer from './components/Footer/Footer.js';
import Card2 from './components/Card/Card2';
import { getCategories, getFilteredProducts } from './components/apiCore';
import Checkbox from './components/Checkbox';
import { Link } from 'react-router-dom';
import './components/main.css';
import './components/font-awesome.min.css';
import './components/Block2/Block2.css';
import './Shop.css';

const Shop = () => {
 
  	const [myFilters, setMyFilters] = useState({
		filters: { category: [] }
	});
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(false);
	const [limit, setLimit] = useState(6);
	const [skip, setSkip] = useState(0);
	const [size, setSize] = useState(0);
	const [filteredResults, setFilteredResults] = useState([]);

	const init = () => {
		getCategories()
			.then(data => {
				if (data.error) {
					setError(data.error);
				} else {
					setCategories(data);
				}
			});
	}

	const loadFiltererdResults = (newFilters) => {
		getFilteredProducts(skip, limit, newFilters).then(data => {
			if (data.error) {
				setError(data.error);
			} else {
				setFilteredResults(data.data);
				setSize(data.size);
				setSkip(0);
			}
		})
	}

	const loadMore = (newFilters) => {
		let toSkip = skip + limit;
		getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
			if (data.error) {
				setError(data.error);
			} else {
				setFilteredResults([ ...filteredResults, ...data.data ]);
				setSize(toSkip);
				setSkip(0);
			}
		})
	}

	const loadMoreButton = () => {
		return (
			size > 0 && size >= limit && (
				<button onClick={loadMore} className='f6 link dim br3 ph3 pv2 mb2 dib white bg-gold' >
					Load More
				</button>
			)
		)
	}

	useEffect(() => {
		init();
		loadFiltererdResults(skip, limit, myFilters.filters);
	}, [])

	const handleFilters = (filters, filterBy) => {
		const newFilters = { ...myFilters }
		newFilters.filters[filterBy] = filters;
		loadFiltererdResults(myFilters.filters)
		setMyFilters(newFilters);
	}

  return (
    <div>
      <Layout />
      <div className='row'>
      	<div className='col-4 pt-5 pr-1'>
      		<h4 className='text-left ml-4 mb-4 shop-filter-header'>Filter by Categories</h4>
			<ul>
				<Checkbox categories={categories} handleFilters={filters => handleFilters(filters, 'category')} />
			</ul>
      	</div>
		<div className='col-8 pt-5'>
			<h2 className='block2-text1'>Products</h2>
			<div className='row'>
				{filteredResults.map((product, i) => (
					<Card2 key={i} product={product} />
				))}
			</div>
		</div>
	  </div>
	  <div className='text-center m-4'>
		{loadMoreButton()}
	  </div>
	  <Footer />
    </div>
			
  );
}

export default Shop;