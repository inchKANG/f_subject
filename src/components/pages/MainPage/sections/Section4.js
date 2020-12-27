import React from 'react';
import { Link } from 'react-router-dom';

function Section4() {
  return (
    <section className="main_section4">
      <div className="container">
        <div className="title_text_wrapper">
          <h1>You Got A Friend In The Business</h1>
          <p>
            Only those who risk going too far can possibly find out how far one
            can go.
          </p>
        </div>

        <div className="divider">
          <ContentItem
            title="Why Design Systems Are Going To Shape The Internet"
            text=" Having worked across a number of different industries in my career
            before"
            image="statics/Image_fx.png"
            to="/"
          />
          <ContentItem
            title="We Need To Talk About The Plague Of Designer’s Insecurity"
            text="Having worked across a number of different industries in my career
            before"
            image="statics/Image_fn.png"
            to="/"
          />
          <ContentItem
            title="Here’s What Developers Want Designers To Know About Dveloper
              Handoff"
            text="Having worked across a number of different industries in my career
              before"
            image="statics/Image_fd.png"
            to="/"
          />
        </div>
      </div>
    </section>
  );
}

const ContentItem = (props) => {
  const { title, text, image, to } = props;
  return (
    <div className="item_wrapper">
      <div className="image_wrapper">
        <img src={image} alt="images" />
        <Link to={to}>
          <i className="fa fa-rocket"></i>
        </Link>
      </div>

      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  );
};

export default Section4;
