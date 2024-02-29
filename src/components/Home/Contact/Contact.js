import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
	const [getmessage, setGetmessage] = useState("")
	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_hpetmir",
				"template_ahzdtso",
				form.current,
				"user_dc7EGv4h3QNVk0mXXSLic"
			)
			.then(
				(result) => {
					setGetmessage("Thank you for your valuable words")
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	setTimeout(function(){setGetmessage("")}, 5000);
	return (
		<div className="contact69Form">
			{getmessage && <div className="messageContact69">
				<p>{getmessage}</p>
			</div>}
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-6">
						<div className="leftContact69">
							<h3 className="mb-4">
								We Help You <br />
								<span>Buy</span> or <span>Sell</span> <br />
								Your Property Quickly
							</h3>
							<p>
								Give us a call or drop by anytime, <br /> we are here to answer
								all: ; questions within <span>24</span> hours on business days.
							</p>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-6">
						<div className="rightContact69">
							<form ref={form} onSubmit={handleSubmit} className="">
								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label contactFromLevel69">
										Your Name
									</label>
									<input
										type="text"
										name="name"
										class="form-control"
										id="exampleInputEmail1"
										required
									/>
								</div>
								<div class="mb-3">
									<label for="yourNumnber" class="form-label contactFromLevel69">
										Phone Number
									</label>
									<input
										type="number"
										name="number"
										class="form-control"
										id="yourNumnber"
										required
									/>
								</div>
								<div class="mb-3">
									<label for="yourEmail" class="form-label contactFromLevel69">
										Your Email
									</label>
									<input
										type="email"
										name="email"
										class="form-control"
										id="yourEmail"
										required
									/>
								</div>
								<div class="mb-4">
									<label for="yourEmail" class="form-label contactFromLevel69">
										Valuable Worlds
									</label>
									<textarea
										type="text"
										name="message"
										class="form-control"
										id="yourEmail"
										required
									/>
								</div>
								<div class="mb-3">
									<button
										class="wpresidence_button   agent_submit_class me-3 col-md-4 offset-md-4"
										id="agent_submit" type="submit"
									>
										SEND
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
