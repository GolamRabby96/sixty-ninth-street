import React from "react";
import WorkDetails from "../WorkDetails/WorkDetails";
import logo1 from "../../../images/WorkDetailLogos/hub1.png";
import logo2 from "../../../images/WorkDetailLogos/hub 2.png";
import logo3 from "../../../images/WorkDetailLogos/hub 3.png";

const worksData = [
  {
    name: "See Role of a Listing Agent",
    image: logo2,
    description:
      "A great real estate agent for a seller is a jack of all trades. They will help you prepare your home for sale",
    to: "/agentroledetails",
  },

  {
    name: "Buy Property",
    image: logo1,
    description:
      "From finding the right agent to getting your keys, learn the basics of how to buy a home.",
    to: "/buydetails",
  },
  {
    name: "Your House Ready to Sell",
    image: logo3,
    description:
      "Ultimately, there are several steps that outlines the essential steps and considerations to prepare for selling your property.",
    to: "/selldetails",
  },
];
const Work = () => {
  return (
    <section className="container mt-5">
      <div className="text-center mt-3 section_headers">
        <h1>How It's Works</h1>
      </div>
      <div className="row p-5">
          {worksData.map((Work) => (
            <WorkDetails Work={Work}></WorkDetails>
          ))}
      </div>
    </section>
  );
};

export default Work;
