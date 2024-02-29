import React, { useState } from "react";
import "./UserDashboard";
const Requirement = () => {
	const [inputData, setInputData] = useState({});
	// console.log(inputData);

	const handleInputData = (e) => {
		const newData = { ...inputData };
		newData[e.target.name] = e.target.value;
		setInputData(newData);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10 offset-md-1">
					<div className="dashboard_header">
						<h1>Add New Requirements</h1>
					</div>
					<br />
					<form onSubmit={handleSubmit}>
						<div className="requirement_header">
							<h5>Property I'm looking for</h5>
						</div>
						<br />
						<div className="row">
							<div className="col">
								<div class="mb-3">
									<label htmlFor="select_type" class="form-label">
										Property For:
									</label>
									<select
										name="property_for"
										id="select_type"
										onBlur={handleInputData}
										class="form-select"
									>
										<option selected>Please Select</option>
										<option value="rent">Rent</option>
										<option value="buy">Buy</option>
									</select>
								</div>
								<div class="mb-3">
									<label htmlFor="select_type" className="form-label">
										Property For:
									</label>
									<br />
									<select
										name="property_for"
										id="select_type"
										onBlur={handleInputData}
										class="form-select"
									>
										<option selected>Please Select</option>
										<option value="rent">Rent</option>
										<option value="buy">Buy</option>
									</select>
								</div>
								<div class="mb-3">
									<label htmlFor="select_type" className="form-label">
										Property Type:
									</label>
									<br />
									<select
										name="property_type"
										onBlur={handleInputData}
										required
										class="form-select"
									>
										<option selected>Please Select</option>
										<option value="flat">Apartment</option>
										<option value="duplex">Duplex Home</option>
										<option value="showroom">Showroom</option>
										<option value="office">Office Space</option>
										<option value="shop">Shop</option>
									</select>
								</div>
								<div class="mb-3">
									<label htmlFor="select_type" className="form-label">
										City:
									</label>
									<br />
									<select
										name="city"
										id=""
										onBlur={handleInputData}
										class="form-select"
									>
										<option selected>Please Select</option>
										<option value="dhaka">Dhaka</option>
										<option value="chittagong">Chittagong</option>
										<option value="khulna">Khulna</option>
										<option value="rajshahi">Rajshahi</option>
										<option value="coxbazar">Cox's Bazar</option>
										<option value="sylhet">Sylhet</option>
										<option value="gazipur">Gazipur</option>
										<option value="mymensingh">Mymensingh</option>
										<option value="rangpur">Rangpur</option>
									</select>
								</div>
							</div>
							<div className="col">
								<div class="mb-3">
									<label htmlFor="" className="form-label">
										Size in Sqft
									</label>
									<br />
									<input
										type="text"
										name="property_size"
										className="form-control"
										onBlur={handleInputData}
									/>
								</div>
								<div class="mb-3">
									<label htmlFor="" className="form-label">
										Name:
									</label>
									<br />

									<input
										type="text"
										placeholder="Enter your Name"
										name="name"
										className="form-control"
										onBlur={handleInputData}
									/>
								</div>

								<div class="mb-3">
									<label htmlFor="" className="form-label">
										Email:
									</label>
									<br />
									<input
										type="email"
										placeholder="Enter your Email"
										name="email"
										className="form-control"
										onBlur={handleInputData}
									/>
								</div>
								<div class="mb-3">
									<label htmlFor="" className="form-label">
										Mobile no:
									</label>
									<br />
									<input
										type="number"
										className="form-control"
										name="phone"
										onBlur={handleInputData}
									/>
								</div>
							</div>
						</div>
						<div className="requirement_button">
							<button className="wpresidence_button" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Requirement;
