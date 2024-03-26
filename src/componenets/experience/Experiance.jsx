import { useState } from 'react';
import { experianceData } from "../../utils/data";
import { motion } from 'framer-motion';
import ExperienceModal from '../experience-modal/Experience-modal';
import "./Experiance.css";

const Experience = () => {
	const [modalStatus, setModalStatus] = useState(false);

	const toggleModal = () => {
		setModalStatus(!modalStatus);
	};


	return (
		<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.5, delay: 0.2 }}
		className="experience-container">
			<ul className="experience-list">
				{experianceData.map((experience, index) => {
					return (
						<li key={index} onClick={() => toggleModal(experience)}>
							<div className="content">
								<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.4 }}
								className="experience-title">{experience.title}</motion.span>

								<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.6 }}
										className="experience-company">
									<div>{experience.company}</div>
                                    <div>{experience.duration}</div>
								</motion.span>
								<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.8 }}
								className="experience-description">
									{ experience.description }
									<span>...show more</span>
								</motion.span>
							</div>
							<ExperienceModal isOpen={modalStatus} experience={experience} onClose={toggleModal} />
						</li>
					);
				})}
			</ul>
		</motion.div>
	);
};

export default Experience;
