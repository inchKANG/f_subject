import React from 'react';

function Section3() {
  return (
    <section className="main_section3">
      <div className="container_row">
        {/* 왼쪽 텍스트, 버튼 있는 부분 */}
        <div className="container_left">
          <h1 className="main_title">
            Building Brands With Purpose And Passion
          </h1>
          <p className="main_desc">
            This is a big one and I consider one of the most important, and
            difficult, things for designer to get right.
          </p>
          <div className="divider">
            <div className="divider_item">
              <h6>Ideas That Provoke</h6>
              <p>
                Life isn't about finding yourself, it’s about creating yourself.
              </p>
            </div>

            <div className="divider_item">
              <h6>Find Your Brand's Voice</h6>
              <p>Better a diamond with a flaw than a pebble without one.</p>
            </div>
          </div>
          <button>Get Started</button>
        </div>

        {/* 오른쪽 이미지 부분 */}
        <div className="container_right">
          <img src="statics/Image_dt.png" alt="images" />
        </div>
      </div>
    </section>
  );
}

export default Section3;
