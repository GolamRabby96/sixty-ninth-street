import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faLandmark,
	faBath,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Properties.css";

const Properties = () => {
	const [properties, setProperties] = useState([]);
	console.log(properties,"Home page properties shoed");
	useEffect(() => {
		fetch("https://sixty-nine-street-server.onrender.com/api/allProperty")
			.then((res) => res.json())
			.then((data) => setProperties(data.data));
	}, []);
	const sliced = properties.slice(0, 2);

	return (
		<div className="mt-5">
			<div className="container">
				<div className="section_headers section_headers69">
					<h1>Properties</h1>
					<p></p>
				</div>
				<div className="row p-3 ">
					{properties &&
						sliced.map((pro) => (
							<div className="col-md-4 mt-5">
								<div className="property_card">
									<Link to={`/spp/${pro._id}`} className="card_links">
										<div className="home_property_card_image">
											<img
												src={pro.image_one}
												className="card-img-top"
												alt="flat-imag"
											/>
											<div className="tag_wrapper">
												<p className="">{pro.property_for}</p>
											</div>
										</div>
										<div className="property_card_body">
											<h5 className="card-title">{pro.property_name}</h5>
											<h6>৳ {pro.price}</h6>
											<p class="card-text mb-3">
												{pro.property_description.substring(0, 80)}...
											</p>
											<div className="d-flex justify-content-evenly pb-3">
												<span className="card_props">
													<FontAwesomeIcon
														className="card_prop_icon"
														icon={faBed}
													/>
													{pro.bedroom}
												</span>
												<span className="card_props">
													<FontAwesomeIcon
														className="card_prop_icon"
														icon={faBath}
													/>
													{pro.bathroom}
												</span>
												<span className="card_props">
													<FontAwesomeIcon
														className="card_prop_icon"
														icon={faLandmark}
													/>
													s {pro.property_size} ft<sup>2</sup>
												</span>
											</div>
											{/* <div className="card_footer">
												<div>
													<h6>
														<FontAwesomeIcon
															className="cta_icon"
															icon={faUser}
														/>Owner:-
														{pro.owner_name}
													</h6>
												</div>
											</div> */}
										</div>
									</Link>
								</div>
							</div>
						))}
				</div>
				<div className="more_btn">
					<Link to="/feature" className="route_links">
						<button>Load More Listings</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Properties;
