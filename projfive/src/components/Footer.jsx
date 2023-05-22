import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFC8xa7_voqGw/profile-displayphoto-shrink_200_200/0/1610966308542?e=1690416000&v=beta&t=TngANVnsZ7mFq03NLQyjJ47mPe1C6-GcKLdCbeRt6Tg"
          alt="Founder"
        />

        <h2>H M Haris</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nibh non,
          imperdiet felis lobortis
        </p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>

          <a href="https://www.instagram.com" target={"blank"}>
            <AiFillInstagram />
          </a>

          <a href="https://www.github.com" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
