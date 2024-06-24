import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Form-input.css';

const FormInput = ({ label, type, del, ...otherProps }) => {
    const inputElement = type === 'textarea' ? (
        <textarea className="form-input" rows='1' {...otherProps} />
    ) : (
        <input className="form-input" type={type} {...otherProps} />
    );

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: del}}
            className="group"
        >
            {inputElement}
            {label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
        </motion.div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    del: PropTypes.number,
    otherProps: PropTypes.object
};

export default FormInput;
