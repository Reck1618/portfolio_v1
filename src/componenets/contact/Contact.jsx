import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <div id='contact' className='contact-form'>
            <form onSubmit={handleSubmit}>
                <FormInput type='text' name='fullName' label='Name' del='0.2' onChange={handleChange} value={fullName} required />
                <FormInput type='email' name='email' label='Email' del='0.3' onChange={handleChange} value={email} required />
                <FormInput type='text' name='subject' label='Subject' del='0.4' onChange={handleChange} value={subject} required />
                <FormInput type='textarea' name='message' label='Message' del='0.5' onChange={handleChange} value={message} required />
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6}}
                >
                    <button type='submit' disabled={!isFormValid()}>Send</button>
                </motion.div>
            </form>

            <AnimatePresence>
                { submitStatus.isOpen && <ContactPopup message={submitStatus.message} onClose={handleClosePopup} /> }
            </AnimatePresence>

        </div>
    )
};

export default Contact;