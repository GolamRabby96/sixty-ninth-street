import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const ManageLoans = () => {
	const [loan, setLoan] = useState([]);
	const [operationUpdate, setOperation] = useState();
	console.log(loan);
	useEffect(() => {
		fetch("https://sixty-nine-street-server.onrender.com/api/getAllLoan").then(
			(res) =>
				res
					.json()

					.then((data) => setLoan(data.data))
		);
	}, [operationUpdate]);

	const handleApproved = (id) => {
		fetch(`https://sixty-nine-street-server.onrender.com/api/updateStatus/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
		}).then((res) => res.json().then((data) => setOperation(data)));
	};

	const handleDelete = (id) => {
		fetch(`https://sixty-nine-street-server.onrender.com/api/delete/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				document.getElementById(id).style.display = "none";
			});
	};

	return (
		<div className="">
			<div className="">
				<div className="">
					<div className="AdminContentHeader">
						<h1>`USER LOAN STATUS`</h1>
					</div>
					<br />
					<div className="AdminTableDiv">
						<table class="AdminResponsiveTable">
							<thead className="theadDark">
								<tr>
									<th scope="col">USERNAME</th>
									<th scope="col">APPLIED DATE</th>
									<th scope="col">AMOUNT</th>
									<th scope="col">STATUS</th>
									<th scope="col">APPROVED</th>
									<th scope="col">DELETE</th>
								</tr>
							</thead>
							<tbody>
								{loan &&
									loan.map((ln) => (
										<tr id={ln._id}>
											<td>{ln.name}</td>
											<td>{ln.createdAt}</td>
											<td>{ln.loan_amount}</td>
											<td>{ln.loan_status}</td>
											<td >
												<button className="AdminOperationButtonA" onClick={() => handleApproved(ln._id)}>
													approved
												</button>
											</td>
											<td >
												<button className="AdminOperationButtonD" onClick={() => handleDelete(ln._id)}>
													delete
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

export default ManageLoans;
