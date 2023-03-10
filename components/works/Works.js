import Project from "./Project";

const Works = () => {
  return (
    <section id="works">
      <div className="container">
        <h2 className="main-title">our projects</h2>
        <p className="main-slogan">
          we always do our best to build powerful applications
        </p>

        <div className="projects">
          {/* Row to display 3 items */}
          <div className="row items-3">
            <Project bg="static/images/p.png" first={true} />
            <div className="col">
              <Project bg="static/images/p2.png" />
              <Project bg="static/images/p3.png" />
            </div>
          </div>

          <div className="row">
            <Project bg="static/images/p4.png" first={true} />
          </div>
        </div>

        <div className="btn-wrap">
          <button className="btn first">load more</button>
        </div>
      </div>
      <style jsx>
        {`
          .projects .row {
            display: flex;
          }
          .projects .row .col {
            display: flex;
            flex-basis: 50%;
            flex-direction: column;
          }
          @media (max-width: 950px) {
            .projects .row {
              display: block;
            }
            .projects .row .col {
              width: 100%;
              display: block;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Works;
