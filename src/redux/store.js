import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from './modules';
import History from '../history';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducer,
  composeEnhancers(
    applyMiddleware(ReduxThunk.withExtraArgument({ history: History })),
  ),
);

export default store;
