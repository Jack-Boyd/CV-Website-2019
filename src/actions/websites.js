import uuid from 'uuid'
import database from '../firebase/firebase';

export const addWebsite = () => ({
  type: 'ADD_WEBSITE',
  website
});

export const startAddWebsite = (websiteData = {}) => {
  return (dispatch) => {
    const {
      image = '',
      name = '',
      url = '',
      text = ''
    } = websiteData;
    const website = {image, name, url, text};

    database.ref('websites').push(website).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...website
      }));
    });
  }
};


export const setWebsites = (websites) => ({
  type: 'SET_WEBSITES',
  websites
});

export const startSetWebsites = () => {
  return (dispatch) => {
    return database.ref('websites').once('value').then((snapshot) => {
      const websites = [];
      snapshot.forEach((element) => {
        websites.push({
          id: element.key,
          ...element.val()
        });
      });
      dispatch(setWebsites(websites));
    });
  }
}