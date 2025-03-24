import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import { Link } from "react-router-dom";
import BlogsGuides from "../../components/blogs/guides";
import { Helmet } from "react-helmet";

function HomeWorkoutPlan() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>10 Best at Home Workouts For Everyone - Fitnesswithgomzi</title>
        <meta name="description" content="This at-home training plan will help you build a strong and lean body. In this article, we will provide you workouts that you can perform without any equipment." />
        <meta name="keyword" content="home workout, how to workout at home, exercises at home" />
        <meta property="og:title" content="10 Best at Home Workouts For Everyone - Fitnesswithgomzi" />
        <meta property="og:description" content="This at-home training plan will help you build a strong and lean body. In this article, we will provide you workouts that you can perform without any equipment." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/blogs/home-workout-plan" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <SimpleHeader />
      <section
        className="blog-ul-li"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="container-fluid">
          <div className="describe mt-5">
            <h1 style={{ color: "#333" }} className="text-center mb-5">
              Home Workout Plan{" "}
              <span className="m-0 text-blue-color"> Without Equipment.</span>
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: "0",
                    overflow: "hidden",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/W_594izR9qE?si=uNlbH0GQz81FtZl6"
                    title="FG Group Video"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-3">
                  <div className="bg1 d-inline-block">
                    <i
                      className="far fa-calendar-alt mr-2 text-blue-color fs-18"
                    ></i>
                    <span>19/01/2021</span>
                  </div>
                  <div className="bg1 float-right d-inline-block">
                    <i
                      className="fas fa-user mr-2 text-blue-color fs-17"
                    ></i>
                    <i></i>
                    <span>
                      <Link
                        to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                        style={{ color: "#000" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dr.Gautam Jani
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Home Workout Plan Without Equipment</h2>
                  <p className="mt-3">
                    Many people love working out at the gym, but life can get
                    busy, making it difficult to hit the gym regularly.
                    Nowadays, due to various reasons, including weather and
                    pandemic restrictions, many people are unable to attend
                    gyms. That's why home workout routines are becoming more
                    popular. It's time to embrace your bodyweight and learn how
                    to workout at home effectively. Believe it or not,
                    bodyweight exercises can be just as effective as lifting
                    dumbbells when it comes to building strength, toning
                    muscles, and increasing fitness levels.
                    <br />
                    <br /> You don't need heavy equipment to build muscle. Home
                    workouts without equipment are great for all fitness levels.
                    Beginners can start slow and learn the proper form and
                    technique for exercises at home, while advanced users can
                    increase the intensity by adding more reps or shortening
                    rest times. These exercises are also integral parts of
                    High-Intensity Interval Training (HIIT) routines, which
                    combine cardio and strength training.
                    <br />
                    <br />
                    In fact, a 2018 study by Experimental Gerontology found that
                    bodyweight resistance exercises offer similar benefits to
                    weight lifting in terms of muscle mass, strength, and
                    metabolic health. So, if you're wondering how to workout at
                    home without missing out on gains, you're in luck!
                    <br />
                    <br /> Certified personal trainer Luke Zocchi suggests
                    focusing on compound movements during your home workout.
                    Compound movements work multiple muscle groups
                    simultaneously, helping to build core strength quickly.
                    Ready to dive in? Below are 10 of the best exercises at home
                    that will tone your body and improve your core strength.
                    <br />
                    <br />
                    <b>1. Squats:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/squats.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                    <br />
                  </p>
                  <p>
                    Squats are a staple in any home workout. Stand with your
                    feet slightly wider than shoulder-width apart. Lower your
                    hips back and down, as though you're sitting on an invisible
                    stool, and keep your chest upright. As you squat, extend
                    your arms forward for balance and ensure your knees don't
                    pass your toes. Push through your heels to stand back up.
                  </p>
                  <p>
                    Squats work on: Quads, glutes, hamstrings, hip flexors, and
                    core.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>2. Burpees:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/burpees.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                    <br />
                  </p>
                  <p>
                    Start in a standing position with feet shoulder-width apart.
                    Drop into a squat, place your hands on the ground, and jump
                    your feet back into a plank. Jump your feet back toward your
                    hands, then jump straight up with your arms overhead. Modify
                    by stepping instead of jumping if necessary.
                  </p>
                  <br />
                  <p>
                    Burpees work on: Arms, chest, quads, hamstrings, glutes, and
                    core.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>3. Hollow Rock:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/hollow_rock.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>

                  <p>
                    Lie on your back with your arms extended overhead and legs
                    straight. Using your core, lift your legs and shoulders
                    slightly off the ground, creating a “hollow” position. Rock
                    gently back and forth while maintaining the U-shape with
                    your body.
                  </p>
                  <br />
                  <p>
                    Hollow rock works on: Core, quads, hip flexors, and glutes.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>4. Monster Sumo Walks:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/walkouts.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>
                  <p>
                    Stand with your feet wide apart and squat down until your
                    thighs are parallel to the ground. Walk forward four steps
                    and then backward four steps, maintaining the squat position
                    throughout.
                  </p>
                  <br />
                  <p>
                    Monster sumo walks work on: Glutes, quads, hamstrings, hips,
                    calves, and inner thighs.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>5: Walkouts:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/side_gorilla.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>
                  <p>
                    Stand tall, bend your knees, and place your hands on the
                    ground. Walk your hands forward until you're in a plank
                    position. Pause, then walk your hands back to your feet and
                    return to standing.
                  </p>
                  <br />
                  <p>
                    Walkouts work on: Shoulders, arms, hamstrings, glutes, core,
                    and lower back.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>6. Frog Squats:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/frog_squats.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>
                  <p>
                    Start with your feet wider than hip-width apart, squat down
                    deeply, and keep your hands at your chest. Raise your hips
                    while keeping your chest up and elbows pressed against your
                    knees, then lower back into the squat. Repeat the movement.
                  </p>
                  <br />
                  <p>
                    Frog squats work on: Hips, glutes, hamstrings, and quads.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>7. Crab Crawl:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/crab_crawl.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>
                  <p>
                    Sit on the ground with your feet flat and arms behind you.
                    Lift your hips off the ground and walk forward using
                    opposite arms and legs. After a few steps, reverse the
                    direction.
                  </p>
                  <br />
                  <p>
                    Crab crawl works on: Shoulders, arms, core, hamstrings,
                    glutes, and quads.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>8. Reverse Crunch:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/reverse_crunch.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>
                  <p>
                    Lie on your back with your knees bent and feet flat on the
                    ground. Curl your knees toward your chest while lifting your
                    hips off the ground. Lower your hips back down with control
                    and repeat.
                  </p>
                  <br />
                  <p>Reverse crunch works on: Lower abdominals.</p>
                  <br />
                  <br />
                  <p>
                    <b>9. Jump Lunges:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/jump_lunges.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>
                  <p>
                    Start by stepping into a lunge position with your right leg
                    back. Push off your left foot to jump into the air, bringing
                    your right knee forward. Land softly back into a lunge.
                    Switch legs for the next rep.
                  </p>
                  <br />
                  <p>
                    Jump lunges work on: Glutes, quads, calves, and hamstrings.
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>10. Side Gorilla:-</b>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/side_gorilla.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-3"></div>
                    </div>
                    <br />
                  </p>
                  <p>
                    Begin in a low frog squat. Place your hands on the ground
                    beside your feet and use your core to shift your body to the
                    side. Return to the squat and repeat, alternating sides.
                  </p>
                  <br />
                  <p>Side gorilla works on: Legs, arms, shoulders, and core.</p>
                  <br />
                  <p>
                    By consistently performing these exercises at home, you'll
                    increase your core strength, tone your body, and stay fit
                    even without any equipment. Remember, how to workout at home
                    effectively depends on the consistency and intensity you
                    apply to your home workout routine.
                  </p>
                  <br />
                  <p>
                    If you're ready to enhance your fitness, incorporating some
                    weights like dumbbells, kettlebells, or ankle weights can
                    add extra resistance to your home workout for further
                    strength gains.
                  </p>
                  <br />
                  <p>
                    So, what are you waiting for? Start your exercises at home
                    today and see the results for yourself!
                  </p>
                </div>
              </div>
              <BlogsGuides />
            </div>
          </div>
        </div>
      </section>
      <FwgFooter />
    </>
  );
}

export default HomeWorkoutPlan;
