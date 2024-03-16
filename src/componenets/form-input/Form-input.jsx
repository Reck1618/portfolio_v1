import PropTypes from 'prop-types';
import './Form-input.css';

const FormInput = ({ label, type, ...otherProps }) => {
    const inputElement = type === 'textarea' ? (
        <textarea className="form-input" rows='1' {...otherProps} />
    ) : (
        <input className="form-input" type={type} {...otherProps} />
    );

    return (
        <div className="group">
            {inputElement}
            {label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    otherProps: PropTypes.object
};

export default FormInput;
