import {createStore, combineReducers, applyMiddleware} from 'redux';
import websiteReducer from '../reducers/websites';
import skillReducer from '../reducers/skills';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      websites: websiteReducer,
      skills: skillReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
}
