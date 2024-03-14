import { experianceData } from "../../utils/data";
import "./Experiance.css";

const Experiance = () => {
	return (
		<div className="experiance-container">
			<ul className="experiance-list">
				{experianceData.map((experiance, index) => {
					return (
						<li key={index}>
							<div className="content">
								<span className="experiance-content">{experiance.title}</span>

								<span className="experiance-company">
									<div>{experiance.company}</div> 
                                    <div>{experiance.duration}</div>
								</span>
								<ul className="experiance-resp">
									{experiance.responsibilities.map((responsibility, index) => {
										return (
											<li className="experiance-resp" key={index}>
												{responsibility}
											</li>
										);
									})}
								</ul>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Experiance;
