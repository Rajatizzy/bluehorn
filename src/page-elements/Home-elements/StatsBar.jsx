import { useEffect, useRef, useState } from "react";
import { FaSolarPanel, FaUsers, FaBolt, FaLeaf } from "react-icons/fa";

const statsData = [
  { value: 30, label: "Projects Completed", icon: <FaSolarPanel /> },
  { value: 25, label: "Happy Clients", icon: <FaUsers /> },
  { value: 1500, label: "Kilowatts Installed", icon: <FaBolt /> },
  { value: 2500, label: "Tonnes of CO₂ Eliminated", icon: <FaLeaf /> },
];

const StatsBar = () => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Scroll detect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Count animation
  useEffect(() => {
    if (!start) return;

    statsData.forEach((item, index) => {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.ceil(item.value / 60);

        setCounts((prev) => prev.map((v, i) => (i === index ? current : v)));

        if (current >= item.value) {
          setCounts((prev) =>
            prev.map((v, i) => (i === index ? item.value : v)),
          );
          clearInterval(interval);
        }
      }, 20);
    });
  }, [start]);

  return (
    <section className="count">
      <div className="">
        <div className="stats-bar" ref={ref}>
          <div className="stats-container">
            {statsData.map((item, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-icon">{item.icon}</div>

                <div>
                  <h3>{counts[i]}+</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
