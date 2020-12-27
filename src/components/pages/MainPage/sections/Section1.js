import React from 'react';
import { useSelector } from 'react-redux';
import { MainActions } from '../../../../redux/actionCreators';

function Section1() {
  const state = useSelector((state) => state.main);
  const { currentProduct } = state;

  return (
    <section className="main_section1">
      <div className="container">
        <div className="item_category">{currentProduct.category}</div>
        {/* 아이템 정보부분. */}
        <div className="item_info">
          <div className="info_left">
            <h1 className="item_name" title="Nike Joyride Run FlyKint">
              {currentProduct.name}
            </h1>
            <p className="item_price">{`$${currentProduct.price}`}</p>
            <div>
              <button className="cart_btn">Add To Cart</button>
            </div>
          </div>

          {/* 아이템 오른쪽 부분(커다란 사진 부분) */}
          <div className="info_right">
            <div className="selected_image_wrapper">
              <div className="background"></div>
              <img
                className="selected_img"
                src={currentProduct.defaultImage}
                alt="images"
              ></img>
            </div>

            <div className="item_image_list">
              {currentProduct.images.map((v, i) => (
                <div className="image_wrapper">
                  <img
                    className="list_img"
                    src={v}
                    alt="images"
                    onMouseOver={() => {
                      MainActions.changeProductImageAction(i);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 다음 아이템 관련 */}
        <div className="next_item">
          <div className="image_wrapper">
            <div className="background"></div>
            <img src="statics/image.png" alt="images"></img>
          </div>

          <div className="next_item_info">
            <h6 className="next_item_name" title=" Air Jordan 6 Retro">
              Air Jordan 6 Retro
            </h6>
            <div className="next_item_price">$225</div>
            <div className="icon_wrapper">
              <i className="fa fa-plus" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
