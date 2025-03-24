import React from "react";

const Faqs = () => {
  return (
    <section>
      <div className="container-fluid margintop">
        <div className="container faq">
          <div className="covid nunito-font text-center">
            <h2>FAQ'S</h2>
            <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
          </div>
          <div id="accordion">
            <div className="card border mt-3">
              <div className="card-header" id="headingOne">
                <ul>
                  <li>
                    <h2 className="h5-fs mb-0">
                      <button
                        className="btn btn-link btnnn"
                        data-toggle="collapse"
                        aria-expanded="true"
                      >
                        What is Rapid Transformation Programme?
                        <i className="fas fa-chevron-down arrow fs-16"></i>
                      </button>
                    </h2>
                  </li>
                </ul>
              </div>
              <div
                id="collapseSix"
                className="colla"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  A rapid transformation programme allows you to take your
                  fitness to the next level. At Fitness With Gomzi, we make it
                  possible by giving you a customised diet plan, personalised PT
                  sessions, consulting and analysing your bodily needs, and then
                  giving you a fitness plan accordingly.
                </div>
              </div>
            </div>
            <div className="card border mt-3">
              <div className="card-header" id="headingOne">
                <ul>
                  <li>
                    <h2 className="h5-fs mb-0">
                      <button
                        className="btn btn-link btnnn"
                        data-toggle="collapse"
                        aria-expanded="true"
                      >
                        Is Weight Loss Guaranteed?
                        <i className="fas fa-chevron-down arrow fs-16"></i>
                      </button>
                    </h2>
                  </li>
                </ul>
              </div>
              <div
                id="collapseOne"
                className="colla"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  If you are ready to dedicate yourself to your fitness journey,
                  anything is possible with the right type of guidance and
                  mentoring. At Fitness with Gomzi, we have it all!
                </div>
              </div>
            </div>
            <div className="card border mt-3">
              <div className="card-header" id="headingOne">
                <ul>
                  <li>
                    <h2 className="h5-fs mb-0">
                      <button
                        className="btn btn-link btnnn"
                        data-toggle="collapse"
                        aria-expanded="true"
                      >
                        How can you help me in my Bodybuilding Journey ?
                        <i className="fas fa-chevron-down arrow fs-16"></i>
                      </button>
                    </h2>
                  </li>
                </ul>
              </div>
              <div
                id="collapseOne"
                className="colla"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  We have been working in the fitness industry for the last 8
                  years and we have seen many clients taking their bodybuilding
                  career to the next level. Our job is to provide you with the
                  right guidance and mentorship so that you can take your
                  bodybuilding journey to a higher level. But if you are not
                  ready to put in efforts and will expect results. We are sorry
                  but it will never work this way!
                </div>
              </div>
            </div>
            <div className="card border mt-3">
              <div className="card-header" id="headingOne">
                <ul>
                  <li>
                    <h2 className="h5-fs mb-0">
                      <button
                        className="btn btn-link btnnn"
                        data-toggle="collapse"
                        aria-expanded="true"
                      >
                        How can I promote a healthy environment in my office ?
                        <i className="fas fa-chevron-down arrow fs-16"></i>
                      </button>
                    </h2>
                  </li>
                </ul>
              </div>
              <div
                id="collapseOne"
                className="colla"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  With our Rapid Transformation Programme 4.0 (Corporate
                  Wellness Program), we will send expert dietitians and
                  nutritionist who will consult, connect and analyze your work
                  environment, after analyzing, we will give fitness plans for
                  every particular employees and also gave you a track record of
                  all the employees , so that you can know who is suffering from
                  what in your office and can take subsequent actions which can
                  promote your employee's productivity.
                </div>
              </div>
            </div>
            <div className="card border mt-3">
              <div className="card-header" id="headingOne">
                <ul>
                  <li>
                    <h2 className="h5-fs mb-0">
                      <button
                        className="btn btn-link btnnn"
                        data-toggle="collapse"
                        aria-expanded="true"
                      >
                        How can I overcome my diseases with diets and exercises
                        ?<i className="fas fa-chevron-down arrow fs-16"></i>
                      </button>
                    </h2>
                  </li>
                </ul>
              </div>
              <div
                id="collapseOne"
                className="colla"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Having the right type of diets and doing the right type of
                  exercises can put you in a much better place in terms of
                  health. The type of diet choices and lifestyle choices we make
                  results in the various type of diseases and disorders in
                  future. So fixing our lifestyle choices and food choices today
                  will result in better tomorrow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
