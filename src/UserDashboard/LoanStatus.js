import React from "react";
import "./UserDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHighlighter,
	faPlus,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../components/contexts/AuthContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LoanStatus = () => {
	return (
		<div>
			<div className="row">
				<div className="AdminContentHeader userPropertyListUserAdmin">
					<h1>
						`LOAN STATUS`
						<Link
							className="dashboard_property_list_header_link"
							to="/loan"
						>
							<FontAwesomeIcon
								className="dashboard_property_list_header_icon"
								icon={faPlus}
							/>
							&nbsp;Apply
						</Link>
					</h1>
				</div>
				<div className="col-sm-12 col-md-12">
					<div className="AdminTableDiv">
						<table class="AdminResponsiveTable">
							<thead className="theadDark">
								<tr>
									<th scope="col">UserName</th>
									<th scope="col">Applied Date</th>
									<th scope="col">Amount</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Brie Larson</td>
									<td>2021/09/28</td>
									<td>500,0000</td>
									<td>pending</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoanStatus;
