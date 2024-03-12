import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./UserDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHighlighter,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
const UserProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://sixty-nine-street-server.onrender.com/api/allProperty")
      .then((res) => res.json())
      .then((data) => setProperties(data.data));
  }, []);

  const deleteProperties = (id) => {
    fetch(
      `https://sixty-nine-street-server.onrender.com/api/deleteProperties/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        document.getElementById(id).style.display = "none";
      });
  };
  return (
    <div className="container">
      <div className="AdminContentHeader userPropertyListUserAdmin">
					<h1>
						`USER PROPERTIES`
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
            {properties &&
              properties.map((pro) => (
                <tr id={pro._id}>
                  <td>
                    <Link to={`/spp/${pro._id}`}>
                      <img className="img-responsive adminImage" src={pro.image_one} alt="" />
                    </Link>
                  </td>
                  <td>{pro.property_name}</td>
                  <td>{pro.price} tk</td>
                  <td className="property_list_cta_buttons">
                    <button className="AdminOperationButtonA">
                      <FontAwesomeIcon icon={faHighlighter} />
                    </button>
                  </td>
                  <td className="property_list_cta_buttons">
                    <button className="AdminOperationButtonD">
                      <FontAwesomeIcon
                        onClick={() => deleteProperties(pro._id)}
                        icon={faTrashAlt}
                      />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProperties;