import CertificatesCard from '../certificates-card/Certificates-card';
import { certificatesData } from '../../utils/data';
import './Certificates.css';


const Certificates = () => {
    return (
        <div id='certificates' className='certificates-container'>
            <div className='certificates-list'>
                {certificatesData.map((certificate, index) => (
                    <CertificatesCard key={index} certificate={certificate} />
                ))}
            </div>
        </div>
    )
};

export default Certificates;