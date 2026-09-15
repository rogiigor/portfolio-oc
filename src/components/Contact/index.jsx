import './Contact.scss'

import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({name, email, textarea});

        setName('')
        setEmail('')
        setTextarea('')
    }
    return (
        <section className='contact' id="contact">
		    <h2 className='contact-title'>Contact</h2>
		    <form className='contact-form' onSubmit={handleSubmit} action="#" method="post">
			    <label className='contact-label' htmlFor="name">Name</label>
			    <input className='contact-input' type="text" name="name" value={name} id="name" 
                    onChange={(e) => setName(e.target.value)} />

			    <label className='contact-label' htmlFor="email">Email</label>
			    <input className='contact-input' type="email" name="email" value={email} id="email" 
                    onChange={(e) => setEmail(e.target.value)}/>

			    <label className='contact-label'  htmlFor="message">Message</label>
			    <textarea className='contact-textarea' name="message" value={textarea} id="message" cols="30" rows="10"
                    onChange={(e) => setTextarea(e.target.value)}></textarea>

			    <input className='contact-input contact-input__submit' type="submit" value="Send" />
		    </form>
	    </section>
    )
} 

export default Contact