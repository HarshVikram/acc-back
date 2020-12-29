import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';
import '../main.css';
import '../font-awesome.min.css';
import './Block3.css';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';

const Block3 = () => {
	return (
		<article id="division">
			<div className='first-row'>
				<div className='block3'>
					<div>
						<header className='block3-text1'>About Us</header>
					</div>
					<div className='block3-text2'>
						<p className='mb0'>Aggarwal Canvas Company has been in the business for over 40 years now. Founded in the late 1970s, we have been famous for 
						unmatched quaility and excellent services. We offer a wide range of the best quality and highly durable printed, dyed, coloured and plain weave
						canvas. We specialise in duck and grey canvas, tussars, powerlooms and casements. We also deal in water proof and fire proof canvas, printed and
						dyed canvas, laminated canvas, tents, tirpals and export fabrics.</p>
						<button class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue mt2">Read More</button>
					</div>
				</div>

				<div className='block3'>
						<header className='block3-text1'>Find Us</header>
						<div className='map-api'>
						<Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.80510034107175!2d77.21166423526533!3d28.663263464109033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1599627762388!5m2!1sen!2sin"
						        width="100%"
						        height="300px"
						        id="myId"
						        className="map-location"
						        display="initial"
						        position="relative" />
						</div>
						<a className='block3-address dim link pointer' href="https://www.google.com/maps/place/245,+Azad+Market+Rd,+Nawabganj,+Sadar+Bazaar,+New+Delhi,+Delhi+110055/@28.664224,77.2081998,17.78z/data=!4m5!3m4!1s0x390cfd76c4d288b1:0x6800bf187d5b339d!8m2!3d28.6640397!4d77.2087784">
							<p className='mb0'>Showroom no. 245, Azad Market, Delhi - 110006</p>
							<p className='mb0 underline'>Click to get the location on Google Maps >></p> 
						</a>
				</div>
			</div>

				<div className='second-row'>
						<div className='counter-container row'>
						  <div className='col-6 col-lg-3'>
						  	<div className='counter-display'>
								<EmojiEmotionsIcon fontSize="large" />
								<div className='counter-stats'>
									<p className=''>5000+ Happy Customers</p>
								</div>
							</div>
						  </div>

						  <div className='col-6 col-lg-3'>
						  	<div className='counter-display'>
								<QueryBuilderOutlinedIcon fontSize="large" />
								<div className='counter-stats'>
									<p className=''>40 Years of Experience</p>
								</div>
							</div>
						  </div>
						  	
						  <div className='col-6 col-lg-3'>
						  	<div className='counter-display'>
								<RoomOutlinedIcon fontSize="large" />
								<div className='counter-stats'>
									<p className=''>Present in 28 States</p>
								</div>
							</div>
						  </div>

						  <div className='col-6 col-lg-3'>
							<div className='counter-display'>
								<LocalShippingOutlinedIcon fontSize="large" />
								<div className='counter-stats'>
									<p className='pb0'>24x7 and Fast Services</p>
								</div>
							</div>
						  </div>	
						</div>
				</div>
		</article>
	);
}

export default Block3; 
