import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers'

function ContactFrom() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState

    const [errorMessage, setErrorMeassage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isvalid = validateEmail(e.target.value);
            console.log(isvalid);

            if (!isvalid) {
                setErrorMeassage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMeassage(`${e.target.name} is required.`);
                } else {
                    setErrorMeassage('');
                }
            }
        }

        setFormState({ ...formState, [e.target.name]: e.target.value })

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    console.log(formState);

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )
}

export default ContactFrom