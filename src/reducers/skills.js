//Skills Reducer
const skillsReducerDefaultState = [];
export default (state = skillsReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_SKILL':
    return [
      ...state,
      action.skill
    ];
    default:
      return state;
  }
}