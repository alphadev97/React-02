import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../assets/data.json";

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel>
            {data.projects.map((i) => (
              <div key={i.title} className="workItem"></div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
