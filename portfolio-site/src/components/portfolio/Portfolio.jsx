import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Gym site 1";
import IMG2 from "../../assets/gym site 2";
import IMG3 from "../../assets/Gym site 3";
import IMG4 from "../../assets/Gym site 4";


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "U-Fit Home Page",
    gitlab: "https://gitlab.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "U-fit Stats",
    gitlab: "https://gitlab.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Interactive Exercise Options",
    gitlab: "https://gitlab.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Links to Youtube video instructions",
    gitlab: "https://gitlab.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, gitlab }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={gitlab} className="btn" target="_blank">
                  Gitlab
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
