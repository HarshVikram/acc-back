import React from 'react';
import { Link } from 'react-router-dom';
import '../Block2/Block2.css';

const Navigation = () => {
	return (
		<div className="bg-white white tc">
		  <div className='acc-logo'>
			<img src="https://github.com/HarshVikram/project-photos/blob/master/aggarwal-canvas-company/ACClogo2.jpg?raw=true" alt="..." className="" />
		  </div>
		  <nav className="bt bb tr mt1 bg-white">
		  	<Link to='/'>
		  		<a className="link bg-animate near-black hover-bg-moon-gray dib nav-box">Home</a>
		  	</Link>
		  	<Link to='/shop'>
		    	<a className="link bg-animate near-black hover-bg-moon-gray dib nav-box">Products</a>
		    </Link>
		    <Link to='/form'>
		    	<a className="link bg-animate near-black hover-bg-moon-gray dib nav-box">Get in touch</a>
		    </Link>
		    <Link to='/contact'>
		    	<a className="link bg-animate near-black hover-bg-moon-gray dib nav-box">Contact</a>
		    </Link>
		  </nav>
		</div>
	);
}

export default Navigation;