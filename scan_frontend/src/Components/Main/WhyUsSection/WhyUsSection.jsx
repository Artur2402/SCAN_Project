import React from "react";
import "./WhyUsSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slider = [
    {
      text: "Высокая и оперативная скорость обработки заявки",
      image: '/Logo/WhyUs/time.svg',
    },

    {
      text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
      image: '/Logo/WhyUs/search.svg',
    },

    {
      text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
      image: '/Logo/WhyUs/safety.svg',
    },

    {
      text: "99,99% процентов довольных клиентов, станьте одним из них!",
      image: '/Logo/WhyUs/happy.svg',
    },
  ];

  return (
      <Slider {...settings}>
        {slider.map((card, id) => (
            <div className="slider-item" key={id}>
              <img className="slider-img" alt="" src={card.image} />
              <p className="slider-info">{card.text}</p>
            </div>
        ))}
      </Slider>
  );
}