import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./blog.css"; // Create this CSS file based on your styles

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Ronne Galle",
      role: "Project Manager",
      text: "“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”",
      imgSrc:
        "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300",
    },
    {
      name: "Missy Limana",
      role: "Engineer",
      text: "“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”",
      imgSrc:
        "https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301",
    },
    {
      name: "Martha Brown",
      role: "Project Manager",
      text: "“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”",
      imgSrc:
        "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302",
    },
    {
      name: "Hanna Lisem",
      role: "Project Manager",
      text: "“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”",
      imgSrc:
        "https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303",
    },
  ];

  return (
    <div className="gtco-testimonials section">
      <h2>Testimonials Carousel - Cards Comments</h2>
      <OwlCarousel
        className="owl-theme"
        loop
        center
        margin={0}
        nav={false}
        responsive={{
          0: { items: 1, nav: false },
          680: { items: 2, nav: false, loop: false },
          1000: { items: 3, nav: true },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="">
            <img
              className="card-img-top"
              src={testimonial.imgSrc}
              alt={testimonial.name}
            />
            <div className="card-body">
              <h5>
                {testimonial.name}
                <br />
                <span>{testimonial.role}</span>
              </h5>
              <p className="card-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default TestimonialsCarousel;
