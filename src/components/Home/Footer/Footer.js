import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faRandom,
	faArrowsAlt,
	faHandPointer,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	const faHandPointer = <FontAwesomeIcon icon={faChevronRight} />;
	return (
		<div className="footer69Section">
			<div className="foter69DownDiv">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-4">
							<div className="footer69Heading text-center">
								<h1><Link to="">SIXTY</Link></h1>
								<h2><Link to="">NINTH STREET</Link></h2>
								<p>
									Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
									tristique id vitae massa. Proin vulputate cong ue rutrum.
									Fusce lobortis a enim eget tempus.
								</p>
							</div>
						</div>
						<div className="col-6 col-sm-6 col-md-2 mt-3">
							<div className="footerSide69">
								<h6>Company</h6>
								<ul>
									<li>
										{faHandPointer}
										<Link to="">About Us</Link>
									</li>
									<li>
										{" "}
										{faHandPointer}
										<Link to="">Properties</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Agents</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Testimonials</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-6 col-sm-6 col-md-2 mt-3">
							<div className="footerSide69">
								<h6>For Renters</h6>
								<ul>
									<li>
										{faHandPointer}
										<Link to="">Guidelines</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Apartments</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Agents</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Testimonials</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-6 col-sm-6 col-md-2 mt-3">
							<div className="footerSide69">
								<h6>For Sellers</h6>
								<ul>
									<li>
										{faHandPointer}
										<Link to="">Sell with us</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">your need</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Agents</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Guidelines</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-6 col-sm-6 col-md-2 mt-3">
							<div className="footerSide69">
								<h6>For Sellers</h6>
								<ul>
									<li>
										{faHandPointer}
										<Link to="">Buy with us</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">your need</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Agents</Link>
									</li>
									<li>
										{faHandPointer}
										<Link to="">Guidelines</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
