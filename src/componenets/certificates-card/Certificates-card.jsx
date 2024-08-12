import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Certificates-card.css';

const CertificatesCard = ({ certificate, del }) => {
    const [showPreview, setShowPreview] = useState(false);
    const handlePreviewClick = () => {
        setShowPreview(!showPreview);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: (del * 0.2)}}
                className='certificate-card'
                onClick={handlePreviewClick}
            >
                <div className='certificate-card-heading'>{certificate.title}</div>
                <div className='certificate-card-provider'>
                    {certificate.provider}
                </div>
            </motion.div>

            {showPreview && (
                <>
                    <div className='blur-overlay'></div>
                    <div className='pdf-popup'>
                        <div className='pdf-popup-header'>
                            <button onClick={handlePreviewClick}>X</button>
                        </div>
                        <embed src={certificate.pdf} type='application/pdf' />
                    </div>
                </>
            )}
        </>
    );
};

CertificatesCard.propTypes = {
    certificate: PropTypes.shape({
        title: PropTypes.string,
        pdf: PropTypes.string,
        provider: PropTypes.string,
    }),
    del: PropTypes.number,
};

export default CertificatesCard;
