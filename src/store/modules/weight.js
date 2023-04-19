const weightState = 100;

export default function weight(state = weightState, action) {
  if (action.type === 'up') {
    const month = new Date().getMonth() + 1;
    return state + month;
  } else if (action.type === 'down') {
    const date = new Date().getDate();
    return state - date;
  }
  return state;
}
