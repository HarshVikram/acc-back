import React from'react';
import { Link } from 'react-router-dom';
import '../main.css';
import '../font-awesome.min.css';
import './Footer.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
	return (
		<footer class="page-footer font-small block2-text2">
		  <div class="container">
		    <div class="row">
			  <div class="col-md-12 ">
		        <div class="mb-2 mt-2 flex-center">
		          <a class="fb-ic px-3">
		            <Link to="/contact"><WhatsAppIcon /></Link>
		          </a>
		          <a class="gplus-ic px-3">
		            <Link to="/contact"><MailIcon /></Link>
		          </a>		         
		          <a class="ins-ic px-3">
		            <Link to="/contact"><InstagramIcon /></Link>
		          </a>
		        </div>
		      </div>
		    </div>
		  </div>		 
		  <div class="footer-copyright text-center pt-2 pb-2">ACC© 2020 Copyright:
		    <a href="https://mdbootstrap.com/"> Aggarwal Canvas Company</a>
		  </div>		  
		</footer>
	);
		
}

export default Footer;