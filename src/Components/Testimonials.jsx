import React from "react";
import "./Testimonials.css";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Regina Miles",
      role: "Designer",
      feedback: "Slate helps you see how many more days  you need to work to reach your financial  goal for the month and year.",
      rating: 5,
      image: user1,
    },
    {
      id: 2,
      name: "Regina Miles",
      role: "Designer",
      feedback: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      rating: 5,
      image: user2,
    },
  ];

  return (
    
    <div className="testimonials">
       
     <div className="testimonials-dis">
     <h6 className="tes-para">Testimonials</h6>
     <h2>Watch our Courses</h2>
      <p>
        Problems trying to resolve the conflict between <br />the two major realms of
        Classical physics: Newtonian mechanics.
      </p>
     </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
           <img src={testimonial.image} alt={testimonial.name} className="user-image" />
            <p className="feedback">{testimonial.feedback}</p>
            <div className="rating">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
            <h4>{testimonial.name}</h4>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
