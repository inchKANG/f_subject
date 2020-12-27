import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { UserActions } from '../../../redux/actionCreators';
import { useSelector } from 'react-redux';

function Header() {
  const { y: currentY } = useScroll();
  const { isLogin } = useSelector((state) => state.user);

  return (
    <>
      <header className={currentY > 100 ? 'scrolled' : ''}>
        <nav className="navbar_wrapper">
          <span className="logo">
            <Link to="/">Kraft8</Link>
          </span>

          <div className="navbar_left">
            <span>
              <Link to="/">Explore</Link>
            </span>
            <span>
              <Link to="/">Work</Link>
            </span>
            <span>
              <Link to="/">Services</Link>
            </span>
            <span>
              <Link to="/">Contact</Link>
            </span>
          </div>

          <div className="navbar_right">
            {isLogin ? (
              <button onClick={UserActions.logoutAction} className="orange_btn">
                log out
              </button>
            ) : (
              <>
                <span>
                  <Link to="/" onClick={UserActions.loginAction}>
                    Log In
                  </Link>
                </span>
                <Link to="/2">
                  <button className="yellow_btn">Sign Up</button>
                </Link>
              </>
            )}
          </div>
          <MobileMenu />
        </nav>
      </header>
      <button
        className={`scroll_top ${currentY < 100 ? 'hide' : ''}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        TOP
      </button>
    </>
  );
}

const MobileMenu = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  //모바일 메뉴가 활성화 되었을때, 외부 클릭 감지.
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      activeOff();
    }
  };

  //모바일 메뉴 열기
  const activeOn = () => {
    setActive(true);
  };

  //모바일 메뉴 닫기
  const activeOff = () => {
    setActive(false);
  };

  return (
    <div className="mobile_menu">
      <div id="navicon" onClick={activeOn}>
        <i className="fa fa-bars" style={{ fontSize: '2.5rem' }}></i>
      </div>
      <menu
        className={`mobile_menu_items ${active ? 'active' : ''}`}
        ref={active ? ref : null}
      >
        <div id="navicon_close" onClick={activeOff}>
          <i className="fa fa-times" style={{ fontSize: '2.5rem' }}></i>
        </div>
        <div className="item_container" onClick={activeOff}>
          <Link to="/">Home</Link>
          {isLogin ? (
            <Link to="/" onClick={UserActions.logoutAction}>
              Log out
            </Link>
          ) : (
            <>
              {' '}
              <Link to="/" onClick={UserActions.loginAction}>
                Log In
              </Link>
              <Link to="/">Sign Up</Link>
            </>
          )}

          <Link to="/">Explore</Link>
          <Link to="/">Work</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </div>
      </menu>
    </div>
  );
};

//스크롤 감지를 위한 훅
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  //계속 함수가 변화해야 하는 상황에서, useCallback으로 묶어버린다면 업데이트가 되지 않는 상황 발생한다.
  // const onScroll = useCallback(() => {
  //   const { pageYOffset } = window;
  //   const deltaY = pageYOffset - state.y;
  //   const hide = pageYOffset !== 0 && deltaY >= 0;

  //   // console.log(window.scrollY);
  //   // console.log(window.pageYOffset);
  //   console.log(state.y);
  //   // console.log(deltaY);
  //   // console.log(hide);

  //   setState({ x: window.scrollX, y: window.scrollY });
  // }, []);

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};

export default Header;
