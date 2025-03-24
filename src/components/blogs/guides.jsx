import React from "react";
import WhatsAppAnchor from "../sendtowhatsapp";
import { Link } from "react-router-dom";

const BlogsGuides = () => {
  return (
    <>
      <div className="col-lg-4 blog-right-sticky">
        <div className="main-blog">
          <div className="blog tabata">
            <h2 className="text-center m-0 h2-fs">Guides</h2>
            <div className="thm-bg-clr dector my-3"></div>
            <ul className="pt-3">
              <li className="my-3">
                <Link to="/blogs/benefits-of-protein" className="text-dark">
                  Benefits of Protein
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/healthy-eating-habits" className="text-dark">
                  7 Healthy Eating Habits
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/7-most-effective-exercises"
                  className="text-dark"
                >
                  7 Most Effective Exercises At Home
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/home-workout-plan" className="text-dark">
                  Home Workout Plan Without Equipment
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/top10-biggest-nutrition-myths"
                  className="text-dark"
                >
                  Top 10 Biggest Nutrition Myths
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/how-to-get-flexible-body" className="text-dark">
                  How To Get Flexible Body?
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/fatloss-vs-weightloss" className="text-dark">
                  Weight Loss VS Fat Loss
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/keto-diet" className="text-dark">
                  What is Keto Diet?
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/what-are-minerals" className="text-dark">
                  What Is Minerals?
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/what-is-digital-marketing" className="text-dark">
                  What Is Digital Marketing ?
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/free-tools-for-beginner-youtubers"
                  className="text-dark"
                >
                  Best Free Tools For Beginner You Tubers
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/best-tea-for-weight-loss" className="text-dark">
                  Best Teas For Weight Loss & Fat Burning
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/green-tea-benefits-and-side-effects"
                  className="text-dark"
                >
                  Green Tea: Health Benefits And Side Effects
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/yoga-for-weight-loss" className="text-dark">
                  Yoga for Weight Loss and Fat Burning
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/type-2-diabetes" className="text-dark">
                  What Is Type-2 Diabetes?
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/write-professional-resume" className="text-dark">
                  How To Write Eye-Grabbing Resume
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/interview-preparation-guide"
                  className="text-dark"
                >
                  The Ultimate Guide To Prepare For An Interview
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/mango-for-weight-loss" className="text-dark">
                  10 Best Health Benefits Of Eating Mango
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/Healthy-Eating-Habits-For-your-Kids"
                  className="text-dark"
                >
                  healthy eating habits for kids
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/start-your-fitness-transformation"
                  className="text-dark"
                >
                  10 tips for starting your Fitness Transformation
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/why-people-hate-gym" className="text-dark">
                  10 Reasons Why People Hate Gym & How to Overcome Them
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/ignite-your-nutrition-journey-explore-the-power-of-a-nutrition-course"
                  className="text-dark"
                >
                  Fuel Your Passion For Nutrition: Explore The Power Of A
                  Nutrition Course
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/vegetarian-diet-plan-for-weight-loss"
                  className="text-dark"
                >
                  Shed Pounds with Ease: Vegetarian Diet Plan for Weight Loss
                  Revealed!
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/anabolic-steroids" className="text-dark">
                  Anabolic steroids: Types, Uses, and Side Effects
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/choosing-the-right-fitness-certification-program-in-India"
                  className="text-dark"
                >
                  Find Your Path to Success: Choosing the Right Fitness
                  Certification Program in India
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/gym-trainer-course" className="text-dark">
                  learn gym trainer course offline at surat with best faculties
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/learn-about-body-composition-how-it-affects-your-health"
                  className="text-dark"
                >
                  Learn about Body Composition and How it Affects Your Health
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/nutrition-course-india" className="text-dark">
                  Nutrition course online with affordable fees
                </Link>
              </li>
              <li className="my-3">
                <Link to="/blogs/nutrition-course-india" className="text-dark">
                  Online Dietitian Plan vs In-Person Consultation: Which is Right
                  for You?
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/blogs/the-importance-of-fitness-education-in-today's-world"
                  className="text-dark"
                >
                  The Importance Of Fitness Education In Today's World
                </Link>
              </li>
            </ul>
          </div>
          <div className="blog tabata">
            <div className="text-center d-lg-block d-none">
              <img
                className="lazy"
                src={process.env.PUBLIC_URL + "/assets/images/img/2610.webp"}
                width="80%"
              />
            </div>
            <div className="text-center d-lg-none d-sm-block">
              <img
                className="lazy"
                src={process.env.PUBLIC_URL + "/assets/images/img/2610.webp"}
                width="50%"
              />
            </div>
            <div className="thm-bg-clr dector my-3"></div>
            <h2 className="h2-fs">
              <Link
                to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                style={{ color: "#000" }}
                target="_blank"
                rel="noreferrer"
              >
                About Dr.Gautam Jani
              </Link>
            </h2>
            <p>
              Dr. Gautam is a civil engineer. By passion he is a dietitian and had
              started practising it in the year 2016. He is the founder of
              fitnesswithgomzi firm established in 2018. He has achieved many
              certificate from ACSM, ISSA and VLCC.
            </p>
            <div className="text-left mt-4 mb-3">
              <WhatsAppAnchor
                message="Hi, I have came across from below page.Can you provide more information about this ?"
                options={{ pageRef: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsGuides;
