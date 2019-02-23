//Websites Reducer
const websitesReducerDefaultState = [];
export default (state = websitesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_WEBSITE':
    return [
      ...state,
      action.website
    ];
    default:
      return state;
  }
}