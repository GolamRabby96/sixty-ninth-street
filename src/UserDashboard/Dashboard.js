import { faHouseUser,faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./UserDashboard.css";

const Dashboard = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="AdminContentHeader">
						<h1>`WELCOME TO SIXTY NINE STREET`</h1>
					</div>
				</div>
				<div className="col-sm-12 col-md-4">
					<div className="adminPropertyUser">
						<div className="userPropertyIcon">
							<FontAwesomeIcon
								className=""
								icon={faHouseUser}
							/>
						</div>
            <div className="userPropertyContent">
								<p>20</p>
								<h5>Properties</h5>
							</div>
					</div>
				</div>
        <div className="col-sm-12 col-md-4">
					<div className="adminPropertyUser">
						<div className="userPropertyIcon">
							<FontAwesomeIcon
								className=""
								icon={faHeart}
							/>
						</div>
            <div className="userPropertyContent">
								<p>20</p>
								<h5>Favorites</h5>
							</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
