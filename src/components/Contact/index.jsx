import './Contact.scss'

import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        sendEmail(name, email, textarea);
        clearForm()
    }

    const sendEmail = (name, email, textarea) => {
        let myEmail = "igorv0@yahoo.com"
        let subject = `contact about web project from ${name}`
        let body = `Salut, Je suis ${name}. Mon email est ${email}. \n\n${textarea}`

        let encodedSubject = encodeURIComponent(subject)
        let encodedBody = encodeURIComponent(body)
        let mailto = `mailto:${myEmail}?subject=${encodedSubject}&body=${encodedBody}`


        window.location.href = mailto
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setTextarea('')
    }

    return (
        <section className='contact' id="contact">
		    <h2 className='contact-title'>Contact</h2>

		    <form className='contact-form' onSubmit={handleSubmit}>
			    <label className='contact-label' htmlFor="name">Name</label>
			    <input className='contact-input' type="text" name="name" value={name} id="name" required
                    onChange={(e) => setName(e.target.value)} />

			    <label className='contact-label' htmlFor="email">Email</label>
			    <input className='contact-input' type="email" name="email" value={email} id="email" required
                    onChange={(e) => setEmail(e.target.value)}/>

			    <label className='contact-label'  htmlFor="message">Message</label>
			    <textarea className='contact-textarea' name="message" value={textarea} id="message" cols="30" rows="10" required
                    onChange={(e) => setTextarea(e.target.value)}></textarea>

			    <input className='contact-input contact-input__submit' type="submit" value="Send" />
		    </form>
	    </section>
    )
}



export default Contact