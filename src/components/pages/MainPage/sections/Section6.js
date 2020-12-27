import React from 'react';

function Section6() {
  return (
    <section className="main_section6">
      <div className="container">
        <div className="title_wrapper">
          <h6>BLOG</h6>
          <h1>Live Today, Tomorrow Will Cost More</h1>
        </div>
        <div className="divider">
          <ContentItem
            image="statics/Image_cb.png"
            title="Why Design Systems Are Going To Shape The Internet"
            text=" Having worked across a number of different industries in my
                career before …"
            profile="statics/Image_cf.png"
            name="enedikt Safiyulin"
          />
          <ContentItem
            image="statics/Image_by.png"
            title="Why Design Systems Are Going To Shape The Internet"
            text=" Having worked across a number of different industries in my
                career before "
            profile="statics/Image_cf.png"
            name="enedikt Safiyulin"
          />
        </div>
        <div className="divider">
          <ContentItem
            image="statics/Image_bm.png"
            title="Why Design Systems Are Going To Shape The Internet"
            text=" Having worked across a number of different industries in my
                career before …"
            profile="statics/Image_cf.png"
            name="enedikt Safiyulin"
          />

          <ContentItem
            image="statics/Image_ba.png"
            title="Why Design Systems Are Going To Shape The Internet"
            text=" Having worked across a number of different industries in my
                career before …"
            profile="statics/Image_cf.png"
            name="enedikt Safiyulin"
          />
        </div>
      </div>
    </section>
  );
}

const ContentItem = (props) => {
  const { image, title, text, profile, name } = props;
  return (
    <div className="item_wrapper">
      <img src={image} alt="images" />
      <div className="content_wrapper">
        <h6>{title}</h6>
        <p className="content_text">{text}</p>

        <div className="profile_wrapper">
          <img className="profile_img" src={profile} alt="images" />
          <div className="profile_text">
            <p className="writer">{name}</p>
            <p className="time_info">Sep 9 - 8 min read </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
