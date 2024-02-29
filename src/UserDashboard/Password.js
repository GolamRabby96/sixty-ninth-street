import React, { useRef } from "react";
import { useAuth } from "../components/contexts/AuthContext";
import "./UserDashboard.css";
// import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { updatePassword } from "firebase/auth";

const Password = () => {
	const { currentUser } = useAuth();
	const newPasswordRef = useRef();
	const auth = getAuth();
	const user = auth.currentUser;
	const handlePasswordUpdate = (e) => {
		e.preventDefault();
		updatePassword(user, newPasswordRef.current.value)
			.then(() => {
				alert("updated");
			})
			.catch((error) => {
				alert("not updated");
			});
	};
	return (
		<div>
			<div className="row">
				<div className="col-sm-12 col-md-8">
					<div className="AdminContentHeader userChangePass">
						<h1>`CHANGE PASSWORD`</h1>
					</div>
					<div className="userPasswordFrom">
						<form onSubmit={handlePasswordUpdate}>
								<div class="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input
										placeholder="Enter New Password"
										type="text"
										class="form-control"
										required
										ref={newPasswordRef}
										aria-describedby="emailHelp"
									/>
									<small id="emailHelp" class="form-text text-muted">
										Please make sure your re-type password are same
									</small>
								</div>
								<div class="form-group mt-5">
									<label for="exampleInputPassword1">Password</label>
									<input
										placeholder="Retype New Password"
										type="text"
										class="form-control"
										required
										ref={newPasswordRef}
										id="exampleInputPassword1"
									/>
								</div>
								<button type="submit" class="btn btn-primary mt-5">
									Confirm Change
								</button>
							</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Password;
