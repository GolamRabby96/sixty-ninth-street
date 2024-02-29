import React, { useState } from "react";
import "./AdminPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faAlignLeft,
	faAlignRight,
	faBookmark,
	faListUl,
	faPeopleArrows,
	faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import ManageAgents from "../AdminDashboard/ManageAgents";
import OurProperties from "../AdminDashboard/OurProperties";
import ManageLoans from "../AdminDashboard/ManageLoans";
import UserProperties from "../AdminDashboard/UserProperties";
import AddAgents from "../components/AddAgents/AddAgents";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const AdminPanel = () => {
	const [controlStyle, setStyle] = useState({
		sidebar: "sidebar20",
		sideDot: "sideDot18",
		mainpage: "mainpage80",
		menuHide: "",
		transitionLeft: "transitionLeft",
		transitionRight: "transitionRight",
		adminOpen: "adminClosed",
	});
	const bar = <FontAwesomeIcon icon={faBars} />;

	const handleSideMenu = () => {
		console.log("clicked");
		if (
			controlStyle.sidebar == "sidebar20" &&
			controlStyle.mainpage == "mainpage80"
		) {
			setStyle({
				sidebar: "sidebar6",
				mainpage: "mainpage94",
				menuHide: "none",
				sideDot: "sideDot5",
				adminOpen: "adminOpen",
			});
		}
		if (
			controlStyle.sidebar == "sidebar6" &&
			controlStyle.mainpage == "mainpage94"
		) {
			setStyle({
				sidebar: "sidebar20",
				mainpage: "mainpage80",
				sideDot: "sideDot18",
				adminOpen: "adminClosed",
			});
		}
	};

	const [data, setData] = useState({
		password: false,
		OurProperties: false,
		UserProperties: false,
		ManageLoans: true,
		AddAgent: false,
	});

	const handleMenuBar = (menuName) => {
		if (menuName === "ManageAgents") {
			setData({
				ManageAgents: true,
				OurProperties: false,
				UserProperties: false,
				ManageLoans: false,
				AddAgent: false,
			});
		}
		if (menuName === "OurProperties") {
			setData({
				ManageAgents: false,
				OurProperties: true,
				UserProperties: false,
				ManageLoans: false,
				AddAgent: false,
			});
		}
		if (menuName === "ManageLoans") {
			setData({
				ManageAgents: false,
				OurProperties: false,
				UserProperties: false,
				ManageLoans: true,
				AddAgent: false,
			});
		}
		if (menuName === "UserProperties") {
			setData({
				ManageAgents: false,
				OurProperties: false,
				UserProperties: true,
				ManageLoans: false,
				AddAgent: false,
			});
		}
		if (menuName === "AddAgent") {
			setData({
				ManageAgents: false,
				OurProperties: false,
				UserProperties: false,
				ManageLoans: false,
				AddAgent: true,
			});
		}
	};
	return (
		<div className="container-fluid">
			<div className="row">
				<div className={`MsideNav transitionLeft ${controlStyle.sidebar}`}>
					<div className={`sideNav transitionLeft ${controlStyle.sideDot}`}>
						<div className={`toggleButton ${controlStyle.adminOpen}`}>
							<span onClick={handleSideMenu}>{bar}</span>
						</div>
						<div className="dextopMenu">
							<div className="BrandName69">
								<Link to="/">
									<h2>
										69
										<span
											style={{
												display: controlStyle.menuHide,
												transition: controlStyle.transitionLeft,
												color: "#00ff7e",
											}}
										>
											_Street
										</span>
									</h2>
								</Link>
							</div>
							<div className="destopMenuStart">
								<ul>
									<li>
										<div
											onClick={() => handleMenuBar("ManageLoans")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faBookmark} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Manage Loans
											</span>
										</div>
									</li>
									<li>
										<div
											onClick={() => handleMenuBar("ManageAgents")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faUnlockAlt} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Manage Agents
											</span>
										</div>
									</li>
									<li>
										<div
											onClick={() => handleMenuBar("OurProperties")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faListUl} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Our Properties
											</span>
										</div>
									</li>
									<li>
										<div
											onClick={() => handleMenuBar("UserProperties")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faPeopleArrows} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												User Properties
											</span>
										</div>
									</li>
									<li>
										<div
											onClick={() => handleMenuBar("AddAgent")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faAlignLeft} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Add Agent
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* ..... Mobile Menu ...   */}
				<nav class="navbar navbar-dark bg-dark fixed-top mobileAdminMenubar">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							Sixty Nine Street
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div
							class="offcanvas offcanvas-end"
							tabindex="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div class="offcanvas-header">
								<h5 class="offcanvas-title" id="offcanvasNavbarLabel">
									69 Street
								</h5>
								<button
									type="button"
									class="btn-close text-reset"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
							</div>
							<div class="offcanvas-body mobileMenuCustomStyle">
								<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("ManageLoans")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faBookmark} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Manage Loans
											</span>
										</div>
									</li>
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("ManageAgents")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faUnlockAlt} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Manage Agents
											</span>
										</div>
									</li>
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("OurProperties")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faListUl} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Our Properties
											</span>
										</div>
									</li>
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("UserProperties")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faPeopleArrows} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												User Properties
											</span>
										</div>
									</li>
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("AddAgent")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faAlignLeft} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Add Agent
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				{/* ..... Mobile Menu ...   */}
				<div
					style={{
						transition: controlStyle.transitionRight,
					}}
					className={`mainAdminPage transitionRight ${controlStyle.mainpage}`}
				>
					<div className="MainContentAdmin">
						{data.ManageAgents && <ManageAgents />}
						{data.OurProperties && <OurProperties />}
						{data.ManageLoans && <ManageLoans />}
						{data.UserProperties && <UserProperties />}
						{data.AddAgent && <AddAgents />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminPanel;
