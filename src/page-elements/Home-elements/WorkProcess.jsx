import {
  FaClipboardCheck,
  FaProjectDiagram,
  FaTools,
  FaRecycle,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Assess",
    // desc: "Our engineers conduct a thorough Energy and Design Consultation to recommend the ideal solar and non-solar solution.",
    icon: <FaClipboardCheck />,
  },
  {
    id: "02",
    title: "Plan",
    // desc: "We secure the right CAPEX or OPEX financing model and manage all necessary liaisons and procurement.",
    icon: <FaProjectDiagram />,
  },
  {
    id: "03",
    title: "Build",
    // desc: "Our installers execute complete civil and electrical Construction with professional Project Management at every stage.",
    icon: <FaTools />,
  },
  {
    id: "04",
    title: "Sustain",
    // desc: "We handle Operation & Maintenance and guide clients through Carbon Credits and ESG Consultation.",
    icon: <FaRecycle />,
  },
];

export default function WorkProcess() {
  return (
    <section className="work-process">
      <div className="container">
        <p className="sub-txt">How We Work</p>
        <h2 className="title text-animate">
          A Seamless Path to <span className="highlight">Clean Energy</span>
        </h2>

        <div className="process-row">
          {steps.map((item, i) => (
            <div className="process-item" key={i}>
              <div className="icon-box">
                {item.icon}
                <span className="step">{item.id}</span>
              </div>

              <h4>{item.title}</h4>
              {/* <p>{item.desc}</p> */}

              {i !== steps.length - 1 && <span className="arrow"></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
