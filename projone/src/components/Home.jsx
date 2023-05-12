import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Alpha97</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum,
            enim sapien placerat rutrum pulvinar tempus euismod at iaculis,
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
