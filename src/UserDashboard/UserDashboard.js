import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faBookmark,
	faHeart,
	faFileAlt,
	faListUl,
	faPeopleArrows,
	faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./Dashboard";
import Favourites from "./Favourites";
import Requirement from "./Requirement";
import Password from "./Password";
import MyPropertiesList from "./MyPropertiesList";
import { Link } from "react-router-dom";
import LoanStatus from "./LoanStatus";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const UserDashboard = () => {
	const [inactive, setInactive] = useState(false);
	const [controlStyle, setStyle] = useState({
		sidebar: "sidebar20",
		sideDot: "sideDot18",
		mainpage: "mainpage80",
		menuHide: "",
		transitionLeft: "transitionLeft",
		transitionRight: "transitionRight",
		adminOpen: "adminOpen",
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
		properties: false,
		dashboard: true,
		requirement: false,
		favorites: false,
		loan_status: false,
	});

	const handleMenuBar = (menuName) => {
		if (menuName === "password") {
			setData({
				password: true,
				properties: false,
				dashboard: false,
				requirement: false,
				favorites: false,
				loan_status: false,
			});
		}
		if (menuName === "properties") {
			setData({
				password: false,
				properties: true,
				dashboard: false,
				requirement: false,
				favorites: false,
				loan_status: false,
			});
		}
		if (menuName === "dashboard") {
			setData({
				password: false,
				properties: false,
				dashboard: true,
				requirement: false,
				favorites: false,
				loan_status: false,
			});
		}
		if (menuName === "favorites") {
			setData({
				password: false,
				properties: false,
				dashboard: false,
				requirement: false,
				favorites: true,
				loan_status: false,
			});
		}
		if (menuName === "requirement") {
			setData({
				password: false,
				properties: false,
				dashboard: false,
				requirement: true,
				favorites: false,
				loan_status: false,
			});
		}
		if (menuName === "loan_status") {
			setData({
				password: false,
				properties: false,
				dashboard: false,
				requirement: false,
				favorites: false,
				loan_status: true,
			});
		}
	};

	useEffect(() => {
		let menuItems = document.querySelectorAll(".menu-item");
		menuItems.forEach((el) => {
			el.addEventListener("click", (e) => {
				const next = el.nextElementSibling;
				menuItems.forEach((el) => el.classList.remove("active"));
				el.classList.toggle("active");
				if (next !== null) {
					next.classList.toggle("active");
				}
			});
		});
	}, []);
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
											onClick={() => handleMenuBar("dashboard")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faFileAlt} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Dashboard
											</span>
										</div>
									</li>
									<li>
										<div
											onClick={() => handleMenuBar("favorites")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faHeart} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												favorites
											</span>
										</div>
									</li>
									<li>
										<div
											onClick={() => handleMenuBar("password")}
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
												Password
											</span>
										</div>
									</li>
									<li>
										<div
											onClick={() => handleMenuBar("properties")}
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
												Properties
											</span>
										</div>
									</li>
									{/* <li>
										<div
											onClick={() => handleMenuBar("requirement")}
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
												Requirements
											</span>
										</div>
									</li> */}
									<li>
										<div
											onClick={() => handleMenuBar("loan_status")}
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
												Loan Status
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* ..... Mobile Menu ...   */}
				{/* ..... Mobile Menu ...   */}
				{/* ..... Mobile Menu ...   */}
				{/* ..... Mobile Menu ...   */}
				<nav class="navbar navbar-dark bg-dark fixed-top mobileAdminMenubar">
					<div class="container-fluid">
						<Link to="/" class="navbar-brand">
							Sixty Nine Street
						</Link>
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
											onClick={() => handleMenuBar("dashboard")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faFileAlt} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												Dashboard
											</span>
										</div>
									</li>
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("favorites")}
											className="menuItem"
										>
											<span className="menuIcon">
												<FontAwesomeIcon icon={faHeart} />
											</span>
											<span
												id="menuName"
												style={{
													display: controlStyle.menuHide,
													transition: controlStyle.transitionLeft,
												}}
											>
												favorites
											</span>
										</div>
									</li>
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("password")}
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
												Password
											</span>
										</div>
									</li>
									<li class="nav-item">
										<div
											onClick={() => handleMenuBar("properties")}
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
												Properties
											</span>
										</div>
									</li>
									{/* <li class="nav-item">
										<div
											onClick={() => handleMenuBar("requirement")}
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
												Requirements
											</span>
										</div>
									</li> */}
									
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
						{data.dashboard && <Dashboard />}
						{data.favorites && <Favourites />}
						{data.password && <Password />}
						{data.properties && <MyPropertiesList />}
						{/* {data.requirement && <Requirement />} */}
						{data.loan_status && <LoanStatus />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
