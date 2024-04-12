import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Zaro template",
    github: "https://github.com/Andrew801168/Zaro-template.git",
    demo: "https://andrew801168.github.io/Zaro-template/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Fylo dark theme landing page",
    github: "https://github.com/Andrew801168/Fylo-Dark_theme.git",
    demo: "https://andrew801168.github.io/Fylo-Dark_theme/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dashboard template",
    github: "https://github.com/Andrew801168/Dash-Board-Template.git",
    demo: "https://andrew801168.github.io/Dash-Board-Template/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Ecommerce product page component",
    github: "https://github.com/Andrew801168/ecommerce-product-page-main.git",
    demo: "https://andrew801168.github.io/ecommerce-product-page-main/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Special landing page design with bootstrap",
    github: "https://github.com/Andrew801168/Special-Design.git",
    demo: "https://andrew801168.github.io/Special-Design/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Show shop landing page with creative drop navbar menu",
    github: "https://github.com/Andrew801168/shoes-shop-template.git",
    demo: "https://andrew801168.github.io/shoes-shop-template/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
