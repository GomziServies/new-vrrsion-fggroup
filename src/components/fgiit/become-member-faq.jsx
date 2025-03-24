import React from "react";

const BecomeMemberFgiitFaqs = () => {

  return (
    <>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container faq">
            <div className="mb-5">
              <h2 className="h2-fs">FAQ'S</h2>
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
                          How much time will I have to spend?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
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
                    Yes, you need to spend at least 4 hours a day up to 16 hours
                    a day. There are no bounds for specific timing, but there
                    will be meetings at a specific time on a daily basis, which
                    is 10 a.m. in the morning and 6 p.m. in the evening.
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
                          How can I learn about personal training and nutrition?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
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
                    You need to finish our FGIIT health and fitness education
                    courses and give an international and government-certified
                    examination, and then you become a FGIITAN member. You can
                    then sell our programme and have a sustainable income source
                    for yourself.
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
                          How much will I make?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
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
                    First of all, you will make 4000 as a fixed salary. After
                    that, on the slabs of 20,000 , 80,000 , 1.40 lakh, and 3
                    lakh, you earn a spacific commission model, and there are no
                    limits for earning. Also, once you get members, you also get
                    a revenue and share from those.
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
                          Can I sell online?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
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
                    Yes, the product will be completely online and service
                    industry-based, so you don't need to purchase any products
                    in advance or invest any money. That's one of the most
                    wonderful and lowest-risk opportunities you have.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default BecomeMemberFgiitFaqs;
