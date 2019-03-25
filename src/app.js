import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import CVPreLoader from './components/CVPreLoader';
import {Provider} from 'react-redux';
import {startSetSkills} from './actions/skills'
import {startSetWebsites} from './actions/websites'
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './firebase/firebase';
import './styles/styles.scss'

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
store.dispatch(startSetSkills());
store.dispatch(startSetWebsites())

ReactDOM.render(jsx, document.getElementById('app'));


registerServiceWorker();

