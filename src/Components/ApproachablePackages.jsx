import React from "react";
import courseImage1 from '../assets/images/courseImage1.png'
import courseImage2 from '../assets/images/courseImage2.png'
const ApproachablePackages = () => {
  const courses = [
    {
      id: 1,
      badge: "Sale",
      title: "Watch our Courses",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      sales: "15 Sales",
      price: "$16.48",
      discountedPrice: "$6.48",
      duration: "22h...",
      lessons: "64 Lessons",
      progress: "Progress",
      image: courseImage1,
      rating: 4.9,
    },
    {
      id: 2,
      badge: "Sale",
      title: "Our Experts Teacher",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      sales: "15 Sales",
      price: "$16.48",
      discountedPrice: "$6.48",
      duration: "22h...",
      lessons: "64 Lessons",
      progress: "Progress",
      image: courseImage2,
      rating: 4.9,
    },
  ];

  return (
    <div className="approachable-packages">
      <div className="package-dis">
        <p className="pdpara">Practice Advice</p>
      <h2>Approachable Packages</h2>
      <p>
        Problems trying to resolve the conflict between <br /> the two major realms of
        Classical physics: Newtonian mechanics.
      </p>
      </div>
      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="badge">{course.badge}</div>
            <img src={course.image} alt={course.title} className="course-image" />
           
            <div className="course-details">
              <p >2,769 online courses</p>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <div className="stats">
                <span>{course.sales}</span>
                <span>{course.duration}</span>
                <span>{course.lessons}</span>
                <span>{course.progress}</span>
              </div>
              <div className="price">
                <span className="original-price">{course.price}</span>
                <span className="discounted-price">{course.discountedPrice}</span>
              </div>
              <button className="learn-morefour">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachablePackages;
