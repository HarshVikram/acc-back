import React from 'react';
import Navigation from './Navigation/Navigation.js';

const Layout = ({ title = "", description = "", className, children }) => {
	return (
		<div>
		  <Navigation />
		  <div className='jumbotron'>
		  	<div className='row main'>
		  	  <div className='title1 col-8 col-lg-9'>
			  	<h2 className='pt3 pb2 mb0'>AGGARWAL</h2>
			  	<h2 className='pb2 mb0'>CANVAS</h2>
			    <h2 className='pb2 mb0'>COMPANY</h2>
			  </div>
			  <div className='title2 col-4 col-lg-3'>
			  	<div className='acc-logo-2'>
				  <img src="https://github.com/HarshVikram/project-photos/blob/master/aggarwal-canvas-company/ACClogo2.jpg?raw=true" alt="..." className="" />
				</div>
			  </div>	
		  	</div>
		  	<p className='pb4 mb0'>{description}</p>		  
		  </div>
		  <div className={className}>
		  	{children}
		  </div>
		</div>
	);
}

export default Layout;