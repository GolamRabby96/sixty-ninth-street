import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import i1 from "../images/UserBoard/e1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHighlighter,
	faPlus,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../components/contexts/AuthContext";

const MyPropertiesList = () => {
	const { currentUser } = useAuth();
	const [personalData, setPersonalData] = useState([]);
	console.log(personalData);
	useEffect(() => {
		fetch(
			`https://sixty-nine-street-server.onrender.com/api/findPropertiesByEmail/${currentUser.user_email}`
		)
			.then((res) => res.json())
			.then((data) => setPersonalData(data.data));
	}, []);
	return (
		<div>
			<div className="row">
				<div className="AdminContentHeader userPropertyListUserAdmin">
					<h1>
						`WON PROPERTIES`
						<Link
							className="dashboard_property_list_header_link"
							to="/addProperty"
						>
							<FontAwesomeIcon
								className="dashboard_property_list_header_icon"
								icon={faPlus}
							/>
							Add New
						</Link>
					</h1>
				</div>
				<div className="col-sm-12 col-md-12">
				<div className="AdminTableDiv">
				<table class="AdminResponsiveTable">
					<thead className="theadDark">
						<tr>
							<th scope="col">Photo</th>
							<th scope="col">Property Name</th>
							<th scope="col">Price</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{personalData &&
							personalData.map((pdata) => (
								<tr>
									<td>
										<Link to={`/spp/${pdata._id}`}>
											<img src={pdata.image_one} alt="" />
										</Link>
									</td>
									<td>{pdata.property_name}</td>
									<td>{pdata.price}</td>
									<td>
										<button className="AdminOperationButtonA">
											<FontAwesomeIcon icon={faHighlighter} />
										</button>
									</td>
									<td>
										<button className="AdminOperationButtonA">
											<FontAwesomeIcon icon={faTrashAlt} />
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
				</div>
			</div>


		</div>
	);
};

export default MyPropertiesList;
