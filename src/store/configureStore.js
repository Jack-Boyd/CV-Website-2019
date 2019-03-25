import {createStore, combineReducers, applyMiddleware} from 'redux';
import websiteReducer from '../reducers/websites';
import skillReducer from '../reducers/skills';
import thunk from 'redux-thunk';
import {startAddSkill} from '../actions/skills';
import {startAddWebsite} from '../actions/websites';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      websites: websiteReducer,
      skills: skillReducer
    }),
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



  // const loadWebsites = (callback) => {
  //   const xobj = new XMLHttpRequest();
  //   xobj.overrideMimeType("application/json");
  //   xobj.open('GET', './data/websites.json', true); // Replace 'my_data' with the path to your file
  //   xobj.onreadystatechange = function () {
  //     if (xobj.readyState == 4 && xobj.status == "200") {
  //       // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
  //       callback(xobj.responseText);
  //     }
  //   };
  //   xobj.send(null);
  // }

  // loadWebsites((response) => {
  //   const data = JSON.parse(response);
  //   data.websites.forEach((web) => {
  //     return store.dispatch(startAddWebsite(web));
  //   });
  // });
  // store.dispatch(startAddSkill({image: '/images/ReactDOM-ASPNET-books.png', name: 'ASP.NET', rating: 100, text: 'ASP.NET is the main framework I use professionally, with it being what Umbraco is based in. \nI know my way around using the framework very well and have found that reverse engineering existing projects has taught me most of what I know.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/csharp-e7b8fcd4ce.png', name: 'C#', rating: 100, text: 'C# was the first language I ever learnt, and paved the way for my interest in software development. \nI first learnt C# in 2014, and picked it up again in 2018 at System7.\nOne of my favourite software languages, I am feel very comfortable programming with C# (also using LINQ + Lambda expressions & XML).', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/cplusplus.png', name: 'C++', rating: 70, text: 'I learnt C++ while taking a game programming course at university. At this point, i had a very good grasp on Object Oriented Programming, and I managed to pick it up in 2 weeks of course (around 8 hours). \nC++ is very fun to develop in, and I have kept up my abilities for if I ever want to start getting back into game development.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/c.png', name: 'C', rating: 70, text: 'C was what we were taught as an introduction to programming at university. \nUsing a raspberry pi, we learnt the basic fundamentals of programming and how to move around in a linux command line format. This experience has lead me to buy my own raspberry pi, and has sparked interest of embedded systems programming.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/java.png', name: 'Java', rating: 80, text: 'Java was the main language taught at university, with 2 years of my degrees programming taught in Java. \nThrough this I learnt about all kinds of data structuers, algorithms & algorithm buildling, distributed & mobile systems, and common programming practices.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/sql.png', name: 'SQL', rating: 60, text: 'SQL is something I never had the opportunity to learn properly at university but had to learn to be effective in my career. I am able to make simple queries and understand the basic concepts of how to make complicated queries, but have not had the experience needed to be fluent in writing long queries.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/html.png', name: 'HTML5', rating: 70, text: 'HTML is part of the collection of technologies I had to learn when I started working full time as a developer. \nAs a basic standard of web development, and having to spend so much time working with it, I have picked up how to build a page with HTML & CSS very quickly.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/css.svg', name: 'CSS3', rating: 60, text: 'CSS is also part of the colection of technologies I learnt when starting full time work. I am quite experienced with changing styling from a pre-existing style set, but the one area I want to improve on is seeing a design, and getting the ability to recreate the design with CSS from scratch.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/javascript.png', name: 'Javascript', rating: 80, text: 'Javascript is a definately my favourite language I have developed in, as I am fascinated by its sheer power and flexibility. \nWatching what people create is very interesting to explore, and is definately something I wanna keep doing for a long time coming in my career.', type: 'taught'}));
  // store.dispatch(startAddSkill({image: '/images/react.svg', name: 'React', rating: 70, text: 'React has been top of my list to learn as I felt it was the most interesting way of developing web pages I have ever seen. \nThe speed and approach React has to development is something I have loved and makes developing React Apps alot of fun. So much so that this website is made using React 16.', type: 'self'}));
  // store.dispatch(startAddSkill({image: '/images/redux.svg', name: 'Redux', rating: 60, text: 'Redux was something I always encountered paired along side React and I would always get very confused by it. \nI ended up thinking that it was a necessity in order to further understand React state & management. I have now got a relatively up to date understanding of the concepts of this and have incorperated it into my CV project.', type: 'self'}));
  // store.dispatch(startAddSkill({image: '/images/sass.png', name: 'Sass', rating: 60, text: 'Sass is a skill I learnt in a course learning how to develop applications with React and Redux. I have become very dependant on it, bringing it into my work, using Gulp.js at work (as it is an easy set up for both me and my colleagues to manage at the company), and Webpack at home. \nUsing this with a module to compile and then auto-reload my work makes development fast, and easy.', type: 'self'}));
  // store.dispatch(startAddSkill({image: '/images/flutter.png', name: 'Flutter', rating: 30, text: 'Flutter is my newest interest, and skill I am driving to learn. I have just started reading into it and creating very basic Android applications with the SDK. \nMy goal is to start putting up applications of value in the Google Play Store & the App Store, and potentially make a passive income doing so.', type: 'self'}));
  // store.dispatch(startAddSkill({image: '/images/angular.png', name: 'Angular', rating: 40, text: 'Angular peaked the same interest to me as React first did, with the way in which front end development is conducted. The reason I want to learn this aswell as React is that Typescript. Learning both Typescript and Angular together would prove useful in my knowledge bank.', type: 'self'}));
  // store.dispatch(startAddSkill({image: '/images/graphql.svg', name: 'GraphQL', rating: 40, text: 'GraphQL is a language I have thought would be something that would be vital for applications in the future. I also have seen it as a gateway / reason into learning back end open source technologies such as Express and Node. ', type: 'self'}));
  // store.dispatch(startAddSkill({image: '/images/node.png', name: 'Node.js', rating: 50, text: 'Node.js is a core in backend development with javascript. As my interest in javascript & all things open source grows, Node is showing up more and more, making it essential for me to learn. I have been looking through tutorials online when I need to use it, but I have purchased a course of all things Node I am currently completing.', type: 'self'}));
  // store.dispatch(startAddSkill({image: '/images/umbraco.png', name: 'Umbraco', rating: 90, text: 'Umbraco is a content management system that I believe is the most powerful system I have seen. I have built over 15 websites using Umbraco and have still have lots left to master, even though I am relatively comfortable with most of what it can do. Developing .NET websites with Umbraco code is the most common piece of software I have built over the past year.', type: 'taught'}));

  return store;
}
