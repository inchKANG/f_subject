import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Main, Second } from './components/pages/pages';
import History from './history';
import { Provider } from 'react-redux';
import store from './redux/store';
import Pages from './components/pages/pages';

//BrouserRouter 가 아닌, 일반 Router을 생성해서 history를 연동해주는 이유는
//리덕스 내부에서, history.push와 같은 함수를 가능하게 해준다.

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}
export default App;
