import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FormInput from '../form-input/Form-input';
import ContactPopup from '../contact-popup/Contact-popup';
import './Contact.css'

const defaultFormFields = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
};

const Contact = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [submitStatus, setSubmitStatus] = useState({ isOpen: false, message: '' });

    const { fullName, email, subject, message } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const isFormValid = () => {
        return Object.values(formFields).every(field => field.trim() !== '');
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const successMessage = 'Your message has been successfully sent. Thank you for reaching out!';
        const errorMessage = 'Uh Oh!! Something went wrong. Please try again!';

        try {
            const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFields)
            });

            if (response.ok) {
                setSubmitStatus({ isOpen: true, message: successMessage });
                resetFormFields();
            } else {
                setSubmitStatus({ isOpen: true, message: errorMessage });
            }

        } catch (error) {
            return setSubmitStatus({ isOpen: true, message: errorMessage });
        }
    };

    const handleClosePopup = () => {
        setSubmitStatus({ isOpen: false, message: '' });
    };

    return (
        <div className='contact-form'>
            <form onSubmit={handleSubmit}>
                <FormInput type='text' name='fullName' label='Name' onChange={handleChange} value={fullName} required />
                <FormInput type='email' name='email' label='Email' onChange={handleChange} value={email} required />
                <FormInput type='text' name='subject' label='Subject' onChange={handleChange} value={subject} required />
                <FormInput type='textarea' name='message' label='Message' onChange={handleChange} value={message} required />
                <button type='submit' disabled={!isFormValid()}>Send</button>
            </form>

            <AnimatePresence>
                { submitStatus.isOpen && <ContactPopup message={submitStatus.message} onClose={handleClosePopup} /> }
            </AnimatePresence>

        </div>
    )
};

export default Contact;