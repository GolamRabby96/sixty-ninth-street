import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./WorkDetails.css";

const WorkDetails = ({ Work }) => {
	return (
    
			<div className="col-12 col-md-4 mb-5 text-center workDetailsCol-4">
				<div className="workDetails_wrapper card">
					<Link to={Work.to}>=
							<img
								src={Work.image}
								class="card-img-top workDetails_wrapperimg"
								alt="..."
								alt="workdetails_logo"
							/>
							<div class="card-body">
								<h4 className="card-title mt-2 mb-2">{Work.name}</h4>
								<p className="card-text text-secondary workDetails_wrapperP">
									{Work.description}
								</p>
                <Link to={Work.to} className="workdetails_read_more">
							Read More <FontAwesomeIcon icon={faCaretRight} />
						</Link>
							</div>
					</Link>
				</div>
			</div>

	);
};

export default WorkDetails;


			// {/* <div className="col-md-4 text-center">
			// 	<div className="workDetails_wrapper">
			// 		<img src={Work.image} alt="workdetails_logo" />
			// 		<h4 className="mt-2 mb-2">{Work.name}</h4>
			// 		<p className="text-secondary workDetails_wrapperP">
			// 			{Work.description}
			// 		</p>
			// 		<p>
			// 			<Link to={Work.to} className="workdetails_read_more">
			// 				Read More <FontAwesomeIcon icon={faCaretRight} />
			// 			</Link>
			// 		</p>
			// 	</div>
			// </div> */}