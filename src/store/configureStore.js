import {createStore, combineReducers} from 'redux'
import websiteReducer from '../reducers/websites'
import skillReducer from '../reducers/skills'
export default () => {
  const store = createStore(
    combineReducers({
      websites: websiteReducer,
      skills: skillReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
