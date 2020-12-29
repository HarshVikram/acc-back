import React, { useState } from 'react';
import Layout from '../Layout.js';
import Footer from '../Footer/Footer.js';
import { formSubmit } from '../apiCore.js';
import { Link } from 'react-router-dom';
import '../Block4/Block4.css'

const Form = () => {
	const [values, setValues] = useState({
		name: '',
		number: '',
        email: '',
       	location: '',
       	about: '',
        error: '',
        success: false
    });

    const { name, number, email, location, about, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

   	const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        formSubmit({ name, number, email, location, about }).then(data => {
			if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
					number: '',
			        email: '',
			       	location: '',
			       	about: '',
			        success: true
                });
            }
        });
    }

    const userForm = () => (
    	<div className='form1-outline'>
			<div className='form1-container'> 
				<div className='form1-heading'>
					<header className="ph0 mh0 block2-text1">Get in touch with us</header>
					<p className='mb0 block2-text2'>Facing issues in finding the right product or going through the website? Don't know what you exactly are looking for?
						    Or you just want to talk to us? We have a solution for all your needs. Help us get in touch with you as soon as possible.</p>
				</div>
				<form className='form1-content'>
					    <div className="mt3">
					        <label className="db fw6 lh-copy f6 tl block2-text2" htmlFor="name">Name</label>
					        <input type="text" class="form-control" id="exampleInputEmail1" onChange={handleChange('name')} value={name} placeholder="Full Name" />
					    </div>
					    <div className="mv3">
					        <label className="db fw6 lh-copy f6 tl block2-text2" htmlFor="email-address">Email</label>
					        <input type="email" class="form-control" id="exampleInputEmail1" onChange={handleChange('email')} value={email} placeholder="example@xyz.com" />
					    </div>
					    <div className="mv3">
					        <label className="db fw6 lh-copy f6 tl block2-text2" htmlFor="number">Phone No.</label>
					        <input type="text" class="form-control" id="exampleInputEmail1" onChange={handleChange('number')} value={number} placeholder="Ex: 0123456789" />
					    </div>
					    <div className="mv3">
					        <label className="db fw6 lh-copy f6 tl block2-text2" htmlFor="state">City, State</label>
					        <input type="text" class="form-control" id="exampleInputEmail1" onChange={handleChange('location')} value={location} placeholder="Ex: New Delhi, Delhi" />
					    </div>
					    <div className="mv3">
					        <label className="db fw6 lh-copy f6 tl block2-text2" htmlFor="pincode">About</label>
					        <textarea className="form-control" onChange={handleChange('about')} value={about} placeholder='Describe your problem/query in under 200 word (optional)' maxlength="200" type="text" name="about" id="about"></textarea>
					    </div>
					<div className="">
					  	<button class="f6 link dim br3 ph3 pv2 mb4 dib white bg-dark-blue" onClick={clickSubmit} type='submit' value='Submit'>Submit</button>
					</div>
				</form>
				<div>
					<p className='mb0 block2-text2 pb3 pr2 pl2'>Need some help fast and want to contact us immediately?</p>
					<Link to='/contact' style={{ color:'white', textDecoration: 'none' }}>
					 	<button class="f6 link dim br3 ph3 pv2 mb4 dib white bg-dark-blue">Contact Us</button>
					</Link>
				</div>
				console.log(name + ", " + number + ", " + email + ", " + location + ", " + about);
			</div>
		</div>
    )

	const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

	const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Your request has been submitted. Please head back to <Link to="/">Home</Link> or <Link to="/shop">see more of our products</Link>.
        </div>
    );

	return (
		<div>
			<Layout />
			{showSuccess()}

           	{showError()}
           	{userForm()}
           	<Footer />
		</div>	
	);
}

export default Form;