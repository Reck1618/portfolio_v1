import { useState } from 'react';
import FormInput from '../form-input/Form-input';
import './Contact.css'

const defaultFormFields = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
};

const Contact = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
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

        if (!isFormValid()) {
            console.log('Form is not valid');
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xleqwddr',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFields)
            });

        if (response.ok) {
            alert('Form submitted');
        } else {
            alert('Form submission failed');
            }
        }
        catch (error) {
            console.log('Error submitting the form', error);
        }
        resetFormFields();
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
        </div>
    )
};

export default Contact;