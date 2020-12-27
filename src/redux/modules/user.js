import { createReducer, createAction } from '@reduxjs/toolkit';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

const login = createAction(LOGIN);
const logout = createAction(LOGOUT);

const loginAction = (props) => (dispatch, getstate, { history }) => {
  dispatch(login());
};

const logoutAction = (props) => (dispatch, getstate, { history }) => {
  dispatch(logout());
};

//유저가 사용할 액션을 export 시킨다.
export const actionCreaters = {
  loginAction,
  logoutAction,
};

//CreateReducer는 immer를 내부적으로 사용. 불변성 관리를 자동으로 해준다.
//-> 매번 새롭게 리턴해줄 필요 없이, 원하는 것만 변경하면 자동으로 그걸 처리해줌.
export default createReducer(
  { isLogin: false },
  {
    [LOGIN]: (state, action) => {
      state.isLogin = true;
      //   return {
      //     ...state,
      //     : true,
      //   };
    },
    [LOGOUT]: (state, action) => {
      state.isLogin = false;
    },
  },
);
