import './Experiance.css'

const Experiance = () => {

    const experianceData = [
        {
            title: 'Fullstack Developer',
            company: 'Company Name',
            duration: '2022-2023',
            responsibilities: 'Responsibilities'
        },
        {
            title: 'Fullstack Developer',
            company: 'Company Name',
            duration: '2022-2023',
            responsibilities: 'Responsibilities'
        }
    ]
    return (
        <div className='experiance-container'>
             <ul className='experiance-list'>
                {experianceData.map((experiance, index) => {
                    return (
                        <li key={index}>
                            <div className="content">
                                <h3>{experiance.title}</h3>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Experiance;