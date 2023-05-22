import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"John Leese"}
          feedback={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam libero ante dictum lobortis"
          }
        />

        <TestimonialCard
          name={"Micheal William"}
          feedback={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam libero ante dictum lobortis"
          }
        />

        <TestimonialCard
          name={"Brown Lee"}
          feedback={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam libero ante dictum lobortis"
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
