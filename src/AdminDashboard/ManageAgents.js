import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ManageAgents = () => {
	const [agent, setAgent] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api/getAgent")
			.then((res) => res.json())
			.then((data) => {
				setAgent(data.data);
			});
	}, []);

  const deleteAgent =(id)=>{
    fetch(`http://localhost:5000/api/deleteAgent/${id}`, {
			method: "DELETE",
		})	
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(id).style.display = "none";
    });
  }
	return (
		<div  className="container">
			<div className="AdminContentHeader">
				<h1>`MANAGE AGENTS`</h1>
			</div>
			<div className='row'>
				<div className="AdminTableDiv">
				<table class="AdminResponsiveTable">
				<thead className="theadDark">
						<tr>
							<th scope="col">Agent Name</th>
							<th scope="col">Amount</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					{agent &&
						agent.map((agt) => (
							<tbody id={agt._id}>
								<tr>
								<td><Link className="agentAdminlink" to={`/singleAgent/${agt._id}`}>{agt.agent_name}</Link></td>
									<td>{agt.fees} tk</td>
									<td className="property_list_cta_buttons">
										<button className="AdminOperationButtonD">
											<FontAwesomeIcon onClick={()=>deleteAgent(agt._id)} icon={faTrashAlt} />
										</button>
									</td>
								</tr>
							</tbody>
						))}
				</table>
				</div>
			</div>
		</div>
	);
};

export default ManageAgents;
