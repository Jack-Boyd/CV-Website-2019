import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import CVPreLoader from './components/CVPreLoader'
import {Provider} from 'react-redux';
import {startSetSkills, startAddSkill} from './actions/skills'
import {startSetWebsites} from './actions/websites'
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './firebase/firebase';
import './styles/styles.scss'
import database from './firebase/firebase';

//VERSION 1.0
//TO DO
//1.) Store 'skills' in a database (firebase, mongodb). Currently always dispatching everything to redux store (very inefficient)
//2.) Build area to easily add new websites / skills & updates existing ones. Way i can do this without having to update code or do it manually
//3.)

const store = configureStore();
const state = store.getState();
const visibleSites = state.websites;
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
// ReactDOM.render(<CVPreLoader/>, document.getElementById('app'));

// const skill = {
//   image: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/377/landscape/typescriptlang.png',
//   name: 'Typescript',
//   rating: 60,
//   text: 'Typescript was something of interest to me as a friend of mine working in software developed websites in React using Typescript. From there, I looked into why Typescript would be necessary and why companies elect to use it. After being convinced of its usefulness, I decided to make an app in React using Typescript in order to learn as I go by fixing typescript based errors in a normal React app.',
//   type: 'self'
// };

store.dispatch(startSetSkills());
store.dispatch(startSetWebsites())

ReactDOM.render(jsx, document.getElementById('app'));

registerServiceWorker();

//git add .
//git commit -m ""
//git push
//git push heroku master