import { experianceData } from "../../utils/data";
import { motion } from 'framer-motion';
import "./Experiance.css";

const Experiance = () => {
	return (
		<div className="experiance-container">
			<ul className="experiance-list">
				{experianceData.map((experiance, index) => {
					return (
						<li key={index}>
							<div className="content">
								<span className="experiance-title">{experiance.title}</span>

								<span className="experiance-company">
									<div>{experiance.company}</div>
                                    <div>{experiance.duration}</div>
								</span>
								<span className="experiance-description">
									{ experiance.description }
								</span>
								{/* <div><span>see more</span></div> */}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Experiance;
