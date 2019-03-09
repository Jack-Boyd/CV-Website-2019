import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {addWebsite} from './actions/websites';
import {addSkill} from './actions/skills';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.scss'

//VERSION 1.0
//TO DO
//1.) Find a way to store 'skills' in a database (firebase, mongodb). Currently always dispatching everything to redux store (very inefficient)
//2.)

const store = configureStore();
const loadWebsites = (callback) => {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './data/websites.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadWebsites((response) => {
  const data = JSON.parse(response);
  data.websites.forEach((web) => {
    return store.dispatch(addWebsite(web));
  });
});

store.dispatch(addSkill({image: '/images/ReactDOM-ASPNET-books.png', name: 'ASP.NET', rating: 100, text: 'ASP.NET is the main framework I use professionally, with it being what Umbraco is based in. \nI know my way around using the framework very well and have found that reverse engineering existing projects has taught me most of what I know.', type: 'taught'}));
store.dispatch(addSkill({image: '/images/csharp-e7b8fcd4ce.png', name: 'C#', rating: 100, text: 'C# was the first language I ever learnt, and paved the way for my interest in software development. \nI first learnt C# in 2014, and picked it up again in 2018 at System7.\nOne of my favourite software languages, I am feel very comfortable with all things C#, aswell as LINQ.', type: 'taught'}));
store.dispatch(addSkill({image: '/images/cplusplus.png', name: 'C++', rating: 60, text: 'C++ is awe faweoi ewiweoif owieoiweoi we', type: 'taught'}));
store.dispatch(addSkill({image: '/images/java.png', name: 'Java', rating: 80, text: 'Java is awe faweoi ewiweoif owieoiweoi we', type: 'taught'}));
store.dispatch(addSkill({image: '/images/sql.png', name: 'SQL', rating: 60, text: 'SQL is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
store.dispatch(addSkill({image: '/images/html.png', name: 'HTML5', rating: 70, text: 'HTML is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
store.dispatch(addSkill({image: '/images/css.svg', name: 'CSS3', rating: 60, text: 'CSS is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
store.dispatch(addSkill({image: '/images/sass.png', name: 'Sass', rating: 60, text: 'Sass is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
store.dispatch(addSkill({image: '/images/javascript.png', name: 'Javascript', rating: 80, text: 'Javascript is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
store.dispatch(addSkill({image: '/images/react.svg', name: 'React', rating: 50, text: 'React is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
store.dispatch(addSkill({image: '/images/redux.svg', name: 'Redux', rating: 40, text: 'Redux is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
store.dispatch(addSkill({image: '/images/flutter.png', name: 'Flutter', rating: 40, text: 'Flutter is a owiefwe of weewiof oew s ', type: 'self'}));
store.dispatch(addSkill({image: '/images/angular.png', name: 'Angular', rating: 40, text: 'Angular is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
store.dispatch(addSkill({image: '/images/graphql.svg', name: 'GraphQL', rating: 40, text: 'GraphQL is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
store.dispatch(addSkill({image: '/images/node.png', name: 'Node.js', rating: 40, text: 'Node.js is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
store.dispatch(addSkill({image: '/images/umbraco.png', name: 'Umbraco', rating: 100, text: 'Umbraco is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/opensource.png', name: 'Open Source Tools', rating: 8, text: 'assf awef awefaweo ', type: 'self'}));

//to do split out skills i use professionally and ones i use at home / learning
const state = store.getState();
const visibleSites = state.websites;
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

registerServiceWorker();

