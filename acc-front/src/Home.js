import React, { Component } from 'react';
import Block1 from './components/Block1/Block1.js';
import Block2 from './components/Block2/Block2.js';
import Block3 from './components/Block3/Block3.js';
import Block4 from './components/Block4/Block4.js';
import Footer from './components/Footer/Footer.js';

class Home extends Component {
	render() {
		return (
			<div>
				<Block1 />
          		<Block2 />
          		<Block3 />
         		<Block4 />
         		<Footer />
			</div>
		);
	}
}

export default Home;