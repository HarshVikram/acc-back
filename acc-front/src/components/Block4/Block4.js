import React from 'react';
import { Link } from 'react-router-dom';
import './Block4.css';

const Block4 = () => {
	return (
		<article className='block4'>
					<div className='block4-content'>
						<div>
							<header className='block2-text1 pa3 pb0'>Need help?</header>
						</div>
						<div className='block2-text2 pa3'>
							<p>Facing diffuclty in deciding which is the best product for you, or want to enquire about something, or do you just need some assistance and details on our services.
							We are here for you, give us your details and we will reach you as soon as possible, or get in touch with us immediately.</p>
							<Link to='/form'>
								<button class="f6 link dim br3 ph3 pv2 mb2 dib white bg-orange">Get in Touch</button>
							</Link>
						</div>
					</div>
		</article>
	);
}

export default Block4;