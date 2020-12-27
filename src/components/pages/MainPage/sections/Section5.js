import React from 'react';
import Slider from 'react-slick';
import Carousel from '../../../common/Carousel/Carousel';

function Section5() {
  const settings = {
    infinite: true, //무한 스크롤
    speed: 1000, //넘어가는 시간.
    slidesToShow: 3, // 한번에 보여지는 슬라이드 수
    slidesToScroll: 4, //스크롤시 한번에 넘어가는 슬라이드 수
    autoplay: true, // 자동 넘어감.
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '10%',
  };
  return (
    <section className="main_section5">
      <div className="container">
        <h1>Teamwork Makes The Dream Work</h1>

        {/* <div className="team_wrapper"> */}
        <Carousel setting={settings}>
          <div className="team_member_wrapper">
            <img src="statics/Image_dk.png" alt="images" />
            <h6>Paulina Gayoso</h6>
            <p>Head Of Sales</p>
          </div>
          <div className="team_member_wrapper">
            <img src="statics/Image_dd.png" alt="images" />
            <h6>Georges Embolo</h6>
            <p>Product Manager</p>
          </div>
          <div className="team_member_wrapper">
            <img src="statics/Image_da.png" alt="images" />
            <h6>Justine Marshall</h6>
            <p>Senior Developer</p>
          </div>
          <div className="team_member_wrapper">
            <img src="statics/Image_cz.png" alt="images" />
            <h6>Gabriel Soares</h6>
            <p>Product Manager</p>
          </div>
          <div className="team_member_wrapper">
            <img src="statics/Image_cs.png" alt="images" />
            <h6>EEdward Lindgren</h6>
            <p>Marketing Manager</p>
          </div>
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Section5;
