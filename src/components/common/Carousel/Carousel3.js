import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

//회전목마 UI 사용을 위한 컴포넌트
function Carousel(props) {
  const slideRef = useRef(null);
  const [state, setState] = useState({
    items: props.children,
    currentItemIndex: 0,
    showValue: props.children.length,
  });

  const show = state.showValue;
  const items = state.items;
  const currentIndex = state.currentItemIndex;
  const sourceSlides = items.slice(currentIndex, currentIndex + show);
  const activeSlides =
    sourceSlides.length < show
      ? [...sourceSlides, items.slice(0, show - sourceSlides.length)]
      : sourceSlides;

  //딜레이를 주기 위해.
  const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const rightClick = async () => {
    slideRef.current.style.opacity = 0;
    await sleep(500);
    slideRef.current.style.opacity = 1;

    if (state.currentItemIndex != state.items.length - 1) {
      setState({
        ...state,
        currentItemIndex: state.currentItemIndex + 1,
      });
    } else {
      setState({
        ...state,
        currentItemIndex: 0,
      });
    }
  };
  const leftClick = async () => {
    slideRef.current.style.opacity = 0;
    await sleep(500);
    slideRef.current.style.opacity = 1;

    if (state.currentItemIndex == 0) {
      setState({
        ...state,
        currentItemIndex: state.items.length - 1,
      });
    } else {
      setState({
        ...state,
        currentItemIndex: state.currentItemIndex - 1,
      });
    }
  };

  return (
    <div className="carousel_container">
      <div className="carousel" ref={slideRef}>
        {activeSlides}
      </div>
      <button className="before_btn" onClick={leftClick}>
        <i className="fa fa-angle-left"></i>
      </button>
      <button className="next_btn" onClick={rightClick}>
        <i className="fa fa-angle-right"></i>
      </button>
    </div>
  );
}

function Item(props) {
  return <div className="carousel_item">{props.children}</div>;
}

Carousel.Item = Item;

export default Carousel;
