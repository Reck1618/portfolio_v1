import { experianceData } from "../../utils/data";
import { motion } from 'framer-motion';
import "./Experiance.css";

const Experiance = () => {
	return (
		<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.5, delay: 0.2 }}
		className="experiance-container">
			<ul className="experiance-list">
				{experianceData.map((experiance, index) => {
					return (
						<li key={index}>
							<div className="content">
								<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.4 }}
								className="experiance-title">{experiance.title}</motion.span>

								<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.6 }}
										className="experiance-company">
									<div>{experiance.company}</div>
                                    <div>{experiance.duration}</div>
								</motion.span>
								<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.8 }}
								className="experiance-description">
									{ experiance.description }
								</motion.span>
							</div>
						</li>
					);
				})}
			</ul>
		</motion.div>
	);
};

export default Experiance;
