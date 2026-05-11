import React from "react";

const WhySolarSection = () => {
  return (
    <section className="whysolar-wrapper">
      <div className="container">
        <div className="whysolar-grid">
          {/* LEFT SIDE */}
          <div className="whysolar-card">
            <h2 className="title text-animate">
              Why <span className="solar">Solar?</span>
            </h2>

            <p className="mt-4">
              Solar is the most consistent and affordable means of energy on
              earth.
            </p>
            <br />

            <p>
              No matter if it's not too bright outside, Solar systems will still
              generate electricity to keep your office, factories & homes bright
              inside.
            </p>
            <br />
            <p>
              Indian Government has launched a massive mission to make India
              Green Energy Leader, their initiatives and incentives are only a
              boost to this already profitable investment.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="whysolar-card">
            <h2 className="title text-animate">
              Why <span className="highlight-blue">Now?</span>
            </h2>

            <p className="pt-4">
              <span className="save">Save YOUR Money</span>
              <br />
              Electricity bills eat up a substantial chunk of your profits.
              Investing in solar can reduce them by atleast 30%.
            </p>

            <p>
              <span className="save">Save YOUR Earth</span>
              <br />
              Climate change is real and affects everyone. Investing in solar
              helps protect the environment for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolarSection;
