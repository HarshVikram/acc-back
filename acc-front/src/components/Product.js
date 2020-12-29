import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { read, listRelated } from './apiCore';
import Layout from './Layout';
import Card1 from './Card/Card1.js';
import Card3 from './Card/Card3.js';

const Product = props => {

	const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    }

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

	return (
		<div>
			<Layout />
   			<div className='mt-5 mb-5'>
                <h4 className='block2-text1'>Product details</h4>
                <div>
                    {product && product.description && <Card3 product={product} showViewProductButton={false} />}
                </div>

                <h4 className='block2-text1 mt-5'>Related products</h4>
                <div className="row">                  
                    { relatedProduct.map((product, i) => (
                        <Card1 key={i} product={product} />             
                    )) }
                </div>
            </div>
		</div>
	);
}

export default Product;