import uuid from 'uuid';
import database from '../firebase/firebase';

export const addSkill = (skill) => ({
  type: 'ADD_SKILL',
  skill
});

export const startAddSkill = (skillData = {}) => {
  return (dispatch) => {
    const {
      image = '',
      name = '',
      rating = 0,
      text = '',
      type = ''
    } = skillData;
    const skill = {image, name, rating, text, type};

    database.ref('skills').push(skill).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...skill
      }));
    });
  }
};

export const setSkills = (skills) => ({
  type: 'SET_SKILLS',
  skills
});

export const startSetSkills = () => {
  return (dispatch) => {
    return database.ref('skills').once('value').then((snapshot) => {
      const skills = [];
      snapshot.forEach((element) => {
        skills.push({
          id: element.key,
          ...element.val()
        });
      });
      dispatch(setSkills(skills));
    });
  }
}