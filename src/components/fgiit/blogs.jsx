import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogImages, setBlogImages] = useState({});

  useEffect(() => {
    const imageUrls = [
      "/assets/images/nutrition/best-whey-protein-in-india-main.webp",
      "/assets/images/blog/blog-img.webp",
      "/assets/images/blog/the-benefts-of-Fitness-Education.jpg",
      "/assets/images/blog/w1.webp",
    ];

    const loadedImages = {};
    let imagesLoaded = 0;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages[url] = url; // Store the loaded image
        imagesLoaded++;
        if (imagesLoaded === imageUrls.length) {
          setBlogImages(loadedImages);
        }
      };
    });
  }, []);

  const BlogCard = ({ image, category, date, title, description, link }) => (
    <a
      href={link}
      className="blog-card"
      target="_blank"
      aria-label="Fg Group"
      rel="noopener noreferrer"
    >
      <img src={blogImages[image] || image} alt={title} />
      <div className="blog-content">
        <span className="category-tag">{category}</span>
        <span className="blog-date">{date}</span>
        <h2 className="h3-fs blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
      </div>
    </a>
  );

  return (
    <section className="blog-section-new">
      <div className="container">
        <div className="covid text-center">
          <h2 className="h2-fs">
            <span className="m-0 text-blue-color">Blogs</span>
          </h2>
        </div>
        <div className="thm-bg-clr dector mb-4"></div>
        <div className="row">
          <div className="col-lg-6">
            <BlogCard
              image="/assets/images/nutrition/best-whey-protein-in-india-main.webp"
              category="Nutrition"
              date="March 27, 2018"
              title="Fuel Your Passion for Nutrition: Explore The Power of a Nutrition Course"
              description="Learn how to nourish your body and fuel your passion for a healthier life."
              link="/blogs/ignite-your-nutrition-journey-explore-the-power-of-a-nutrition-course"
            />
          </div>
          <div className="col-lg-6">
            <BlogCard
              image="/assets/images/blog/blog-img.webp"
              category="Fitness"
              date="January 1, 2021"
              title="How to Choose the Right Fitness Certification Program in India for Your Career Goals"
              description="Discover the best fitness certifications to kickstart your career."
              link="/blogs/choosing-the-right-fitness-certification-program-in-India"
            />
          </div>
          <div className="col-lg-6">
            <BlogCard
              image="/assets/images/blog/the-benefts-of-Fitness-Education.jpg"
              category="Health"
              date="March 27, 2018"
              title="The Importance Of Fitness Education In Today's World"
              description="Understand the significance of proper fitness education for lasting health."
              link="/blogs/the-importance-of-fitness-education-in-todays-world"
            />
          </div>
          <div className="col-lg-6">
            <BlogCard
              image="/assets/images/blog/w1.webp"
              category="Wellness"
              date="January 1, 2021"
              title="Weight Loss VS Fat Loss"
              description="Explore the difference between weight loss and fat loss, and find the best approach for you."
              link="/blogs/fatloss-vs-weightloss"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
