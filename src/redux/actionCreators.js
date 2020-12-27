import { bindActionCreators } from 'redux';
import store from './store';
import { actionCreaters as mainActions } from './modules/main';
import { actionCreaters as userActions } from './modules/user';

//스토어 객체에서 dispatch를 가져온다.
const { dispatch } = store;

export const MainActions = bindActionCreators(mainActions, dispatch);
export const UserActions = bindActionCreators(userActions, dispatch);
