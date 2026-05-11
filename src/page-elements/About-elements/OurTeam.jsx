// import React from "react";
// import "../About-elements/about.css";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// import team from "../../assets/img/about-1.jpg";

// const OurTeam = () => {
//   return (
//     <section className="team-section">
//       <div className="container">
//         <div className="team-title text-center">
//           <span className="sub-txt text-center">OUR TEAM</span>
//           <h2 className="title text-animate text-center">
//             Meet Our <span className="highlight"> Expert</span>
//           </h2>
//         </div>

//         <div className="team-card">
//           <div className="team-image">
//             <img src={team} alt="team" />
//           </div>

//           <div className="team-info">
//             <h3>Rahul Sharma</h3>
//             <h5>Solar Energy Specialist</h5>

//             <p>
//               Our experienced solar specialist ensures efficient solar EPC
//               solutions for industries, commercial establishments and
//               residential sectors.
//             </p>

//             <div className="team-social">
//               <a href="#">
//                 <FaFacebookF />
//               </a>
//               <a href="#">
//                 <FaTwitter />
//               </a>
//               <a href="#">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;
import React from "react";
import "../About-elements/about.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

import anuj from "../../assets/img/Blue-Horn-(1).png";
import ritwik from "../../assets/img/Blue-Horn-(2).png";
import kaustav from "../../assets/img/Blue-Horn-(3).png";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Anuj Agarwal",
      role: "CEO & Founder",
      desc: "Anuj is an MBA from SIBM, Pune. His vision to make sustainable energy sources more popular and profitable is driven by his experience in leading profitable businesses in Logistics and Event Management.",
      image: anuj,
      linkedin: "#",
    },
    {
      name: "Ritwik Ghosh",
      role: "Partner, Ilios Technology",
      desc: "Ritwik holds more than 9 years of experience in the solar industry. He has worked with companies like Husk Power and helped several major MNCs transition to solar.",
      image: ritwik,
      linkedin: "#",
    },
    {
      name: "Kaustav Mondal",
      role: "Chief Engineer",
      desc: "Kaustav has 5+ years of experience designing, executing and managing solar projects from Micro-Grids to Utility-scale systems.",
      image: kaustav,
      linkedin: "#",
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-title text-center">
          <span className="sub-txt">OUR TEAM</span>
          <h2 className="title text-animate">
            Meet Our <span className="highlight">Leadership</span>
          </h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team-info">
                <h3>{member.name}</h3>
                <h5>{member.role}</h5>
                <p>{member.desc}</p>

                <div className="team-social">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href={member.linkedin}>
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
