import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Carousel.scss';

function Carousel(props) {
  let { setting } = props;

  //화면 크기에 따라서 setting 변경.
  const [settings, setSettings] = useState(
    window.innerWidth > 768
      ? setting
      : {
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: true,
        },
  );

  const onResize = () => {
    if (window.innerWidth < 768) {
      setSettings({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
      });
    } else {
      setSettings(setting);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="carousel_wrapper">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
}

export default Carousel;
