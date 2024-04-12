import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina Marckos",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores illo. Vero aliquam vitae fugiat. Corrupti exercitationem officia minus quis nam autem, quas accusamus unde eum id velit aliquid nobis.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Jack Miles",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores illo. Vero aliquam vitae fugiat. Corrupti exercitationem officia minus quis nam autem, quas accusamus unde eum id velit aliquid nobis.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Andrias John",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores illo. Vero aliquam vitae fugiat. Corrupti exercitationem officia minus quis nam autem, quas accusamus unde eum id velit aliquid nobis.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Aya Mohamed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores illo. Vero aliquam vitae fugiat. Corrupti exercitationem officia minus quis nam autem, quas accusamus unde eum id velit aliquid nobis.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
