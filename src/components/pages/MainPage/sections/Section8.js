import React from 'react';

function Section8() {
  return (
    <section className="main_section8">
      <div className="container_row">
        <div className="content_left">
          <div className="main_item">
            <div className="like_user_wrapper">
              <div>
                <img src="statics/Image_g.png" alt="images" />
              </div>
              <div>+5</div>
            </div>
            <h1>Furniture Is Art With An Attitude</h1>

            <p>
              This is a big one and I consider one of the most important thing
              for a designer to get right.
            </p>

            <div className="price_info">
              <button>Add To Cart</button>
              <p>$1299</p>
            </div>
          </div>
          <div className="next_item">
            <img src="statics/Image_gv.png" alt="images" />
            <div className="next_item_info">
              <h6>Easy Squeeze Sofa Bed</h6>
              <p>$1595</p>
            </div>
          </div>
        </div>
        <div className="content_image">
          <img src="statics/Image_gr.png" alt="images" />
        </div>
      </div>
    </section>
  );
}

export default Section8;
