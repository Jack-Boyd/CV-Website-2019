import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {addWebsite} from './actions/websites';
import {addSkill} from './actions/skills';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss'

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
const loadSkills = (callback) => {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './data/skills.json', true); // Replace 'my_data' with the path to your file
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
loadSkills((response) => {
  const data = JSON.parse(response);
  data.skills.forEach((skill) => {
    return store.dispatch(addSkill(skill));
  });
});

// store.dispatch(addSkill({image: '/images/ReactDOM-ASPNET-books.png', name: 'ASP.NET', rating: 10, text: 'ASP.NET is awe faweoi ewiweoif owieoiweoi we', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/csharp-e7b8fcd4ce.png', name: 'C#', rating: 10, text: 'C# is awe faweoi ewiweoif owieoiweoi we', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/cplusplus.png', name: 'C++', rating: 6, text: 'C++ is awe faweoi ewiweoif owieoiweoi we', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/java.png', name: 'Java', rating: 8, text: 'Java is awe faweoi ewiweoif owieoiweoi we', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/sql.png', name: 'SQL', rating: 6, text: 'SQL is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/html.png', name: 'HTML5', rating: 7, text: 'HTML is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/css.svg', name: 'CSS3', rating: 6, text: 'CSS is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/sass.png', name: 'Sass', rating: 6, text: 'Sass is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
// store.dispatch(addSkill({image: '/images/javascript.png', name: 'Javascript', rating: 8, text: 'Javascript is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));
// store.dispatch(addSkill({image: '/images/react.svg', name: 'React', rating: 5, text: 'React is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
// store.dispatch(addSkill({image: '/images/redux.svg', name: 'Redux', rating: 4, text: 'Redux is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
// store.dispatch(addSkill({image: '/images/angular.png', name: 'Angular', rating: 4, text: 'Angular is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
// store.dispatch(addSkill({image: '/images/graphql.svg', name: 'GraphQL', rating: 4, text: 'GraphQL is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
// store.dispatch(addSkill({image: '/images/node.png', name: 'Node.js', rating: 4, text: 'Node.js is a blashfolefo iwe jfowaefaweo ', type: 'self'}));
// store.dispatch(addSkill({image: '/images/umbraco.png', name: 'Umbraco', rating: 10, text: 'Umbraco is a blashfolefo iwe jfowaefaweo ', type: 'taught'}));

//to do split out skills i use professionally and ones i use at home / learning
const state = store.getState();
const visibleSites = state.websites;
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
setTimeout(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
}, 5)

