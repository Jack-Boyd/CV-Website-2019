//Skills Reducer
const skillsReducerDefaultState = [];
export default (state = skillsReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_SKILL':
    return [
      ...state,
      action.skills
    ];
    case 'SET_SKILLS':
    return action.skills;
    default:
      return state;
  }
}