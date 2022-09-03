import React, { useState } from "react";

function ContactFrom() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    console.log(formState);

    return (
        <section>
            <h1>Contact me</h1>
            <from id="contact-form">
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
            </from>
        </section>
    )
}

export default ContactFrom