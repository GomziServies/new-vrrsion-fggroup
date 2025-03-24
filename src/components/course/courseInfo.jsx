import React, { useState } from "react";

const CourseInfo = ({
  title,
  description,
  mobileDescription,
  mobileShowMoreDescription,
  courseImg,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const CourseInfoArray = [
    {
      title: `The Fitness Industry: An Overview of the Landscape`,
      description: `This section introduces the dynamic world of fitness, highlighting its growth and the roles of various professionals. Students will explore trends, challenges, and opportunities within the industry, gaining insights into the business aspects of fitness centers, personal training, and client relationships. The emphasis will be on understanding consumer needs, industry standards, and how technology and innovation shape modern fitness practices.`,
      mobileDescription: `This section introduces the dynamic world of fitness, highlighting its growth and the roles of various professionals.`,
      mobileShowMoreDescription: ` Students will explore trends, challenges, and opportunities within the industry, gaining insights into the business aspects of fitness centers, personal training, and client relationships. The emphasis will be on understanding consumer needs, industry standards, and how technology and innovation shape modern fitness practices.`,
      courseImg: true,
      courseImgSrc: "/assets/images/course-img/offline-one.webp",
    },
    {
      title: `Anatomical Terminology`,
      description: `This topic familiarizes students with the language of anatomy used in fitness training. Understanding anatomical terms is essential for communication in the fitness field. Students will learn about planes of movement, joint actions, and directional terms like medial, lateral, anterior, and posterior, crucial for accurate exercise instruction and program design.`,
      mobileDescription: `This topic familiarizes students with the language of anatomy used in fitness training. Understanding anatomical terms is essential`,
      mobileShowMoreDescription: ` for communication in the fitness field. Students will learn about planes of movement, joint actions, and directional terms like medial, lateral, anterior, and posterior, crucial for accurate exercise instruction and program design.`,
    },
    {
      title: `Kinesiology`,
      description: `Kinesiology is the study of human movement. This section
                        explores the mechanics of muscles, bones, and joints,
                        offering an in-depth understanding of how the body moves
                        during exercise. Students will learn how different
                        exercises impact muscle groups and how to design
                        programs that maximize performance and reduce injury
                        risks.`,
      mobileDescription: `Kinesiology is the study of human movement. This section
                        explores the mechanics of muscles, bones, and joints,
                        offering an`,
      mobileShowMoreDescription: ` in-depth understanding of how the body moves during exercise. Students will learn how different exercises impact muscle groups and how to design programs that maximize performance and reduce injury risks.`,
      courseImg: true,
      courseImgSrc: "/assets/images/course-img/offline-three.webp",
    },
    {
      title: `Physiology`,
      description: `This topic covers the body's physiological responses to
                      exercise, including cardiovascular, respiratory, and
                      muscular systems. Students will understand how exercise
                      influences heart rate, blood flow, and muscle adaptation,
                      vital for designing effective workout routines. Key
                      concepts include energy systems and the role of oxygen in
                      fitness.`,
      mobileDescription: `This topic covers the body's physiological responses to
                      exercise, including cardiovascular, respiratory, and
                      muscular systems.`,
      mobileShowMoreDescription: ` Students will understand how exercise influences heart rate, blood flow, and muscle adaptation, vital for designing effective workout routines. Key concepts include energy systems and the role of oxygen in fitness.`,
    },
  ];
  
  return (
    <>
      {courseImg ? (
        <div className="col-lg-12 order-2 order-lg-1">
          <blockquote className="blockquote mb-4 d-flex align-items-center justify-content-between flex-column flex-md-row">
            <div className="blockquote-content d-md-block d-none order-0">
              <h2 className="h5-fs text-primary font-weight-bold">{title}</h2>
              <p className="text-muted">{description}</p>
            </div>
            <div className="blockquote-content d-md-none d-block order-2">
              <h2 className="h5-fs text-primary font-weight-bold">{title}</h2>
              <p className="text-muted">
                {mobileDescription}
                {showMore ? (
                  mobileShowMoreDescription
                ) : (
                  <span id="dotsx">...</span>
                )}
              </p>
              <span
                onClick={toggleReadMore}
                id="myBtnrb"
                className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
              >
                {showMore ? "Read less" : "Read more"}
              </span>
            </div>
            <div className="blockquote-img-container order-1">
              <img
                src="/assets/images/course-img/offline-one.webp"
                alt="Fitness Industry"
                className="blackquote-img"
              />
            </div>
          </blockquote>
        </div>
      ) : (
        <div className="col-lg-12 order-2 order-lg-1">
          <blockquote className="blockquote d-md-block d-none mb-4">
            <h2 className="h5-fs text-primary font-weight-bold mt-3">{title}</h2>
            <p className="text-muted">{description}</p>
          </blockquote>
          <blockquote className="blockquote d-md-none d-block mb-4">
            <h2 className="h5-fs text-primary font-weight-bold">{title}</h2>
            <p className="text-muted">
              {mobileDescription}
              {showMore ? (
                mobileShowMoreDescription
              ) : (
                <span id="dotsx">...</span>
              )}
            </p>
            <span
              onClick={toggleReadMore}
              id="myBtnrb"
              className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
            >
              {showMore ? "Read less" : "Read more"}
            </span>
          </blockquote>
        </div>
      )}
    </>
  );
};

export default CourseInfo;
