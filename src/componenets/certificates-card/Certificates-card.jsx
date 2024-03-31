// import React, { useState } from 'react';
import { RxOpenInNewWindow } from "react-icons/rx";
import PropTypes from 'prop-types';
import './Certificates-card.css';

const CertificatesCard = ({ certificate }) => {

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className='certificate-card'>
            <div className="certificate-card-heading">{certificate.title}</div>
            <div className="certificate-card-link">
                <a href={certificate.url} target="_blank" rel="noreferrer" onClick={stopPropagation}><RxOpenInNewWindow /></a>
            </div>
        </div>
    );
};


CertificatesCard.propTypes = {
    certificate: PropTypes.shape({
        title: PropTypes.string,
        pdf: PropTypes.string,
        url: PropTypes.string
    })
};

export default CertificatesCard;


// const [showPreview, setShowPreview] = useState(false);

// const handlePreviewClick = () => {
//     setShowPreview(!showPreview);
// };


// {showPreview && (
//     <div className="image-preview">
//         <img src={certificate.image} alt={certificate.title} />
//         <span className="close-btn" onClick={handlePreviewClick}>X</span>
//     </div>
// )}