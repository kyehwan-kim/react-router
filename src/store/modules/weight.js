const weight = 100;

export default function weightReducer(state = weight, action) {
  if (action.type === 'up') {
    const month = new Date().getMonth() + 1;
    return state + month;
  } else if (action.type === 'down') {
    const date = new Date().getDate();
    return state - date;
  }
  return state;
}
