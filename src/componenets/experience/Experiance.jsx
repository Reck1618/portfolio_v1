import { experianceData } from '../../utils/data';
import './Experiance.css'

const Experiance = () => {

    return (
        <div className='experiance-container'>
             <ul className='experiance-list'>
                {experianceData.map((experiance, index) => {
                    return (
                        <li key={index}>
                            <div className="content">
                                <span>{ experiance.title }</span>
                                <span>{ experiance.company }</span>
                                <span>{ experiance.duration }</span>
                                <ul>
                                    {experiance.responsibilities.map((responsibility, index) => {
                                        return (
                                            <li className='experiance-resp' key={index}>{responsibility}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Experiance;