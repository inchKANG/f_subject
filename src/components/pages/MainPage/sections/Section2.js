import React from 'react';
import Carousel from '../../../common/Carousel/Carousel';
import Slider from 'react-slick';
import ClientReviewCard from '../../../common/Card/ClientReview';

function Section2() {
  const settings = {
    infinite: true, //무한 스크롤
    speed: 1000, //넘어가는 시간.
    slidesToShow: 4, // 한번에 보여지는 슬라이드 수
    slidesToScroll: 4, //스크롤시 한번에 넘어가는 슬라이드 수
    autoplay: true, // 자동 넘어감.
    pauseOnHover: true,
    centerMode: true,
  };
  return (
    <section className="main_section2">
      <div className="container">
        {/* 상단 텍스트 부분 */}
        <div className="text_wrapper">
          <h1 className="main_title">
            We Are Loved By Users And Clients Worldwide
          </h1>
          <p className="main_desc">
            Only those who risk going too far can possibly find out how far one
            can go.
          </p>
        </div>
        <Carousel setting={settings}>
          <ClientReviewCard
            item={{
              profile: 'statics/Image_ia.png',
              review:
                '“It’s not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."',
              name: 'Pin Jung-Eum',
              job: 'Product Designer',
            }}
          />
          <ClientReviewCard
            item={{
              profile: 'statics/Image_h.png',
              review:
                '“It’s not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."',
              name: 'Pin Jung-Eum',
              job: 'Product Designer',
            }}
          />
          <ClientReviewCard
            item={{
              profile: 'statics/Image_hu.png',
              review:
                '“It’s not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."“It’s not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."“It’s not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."',
              name: 'Pin Jung-Eum',
              job: 'Product Designer',
            }}
          />
          <ClientReviewCard
            item={{
              profile: 'statics/Image_hm.png',
              review:
                '“It’s not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."',
              name: 'Pin Jung-Eum',
              job: 'Product Designer',
            }}
          />
        </Carousel>
      </div>
    </section>
  );
}

export default Section2;
