export const setNextIndex = (state, props) => ({
  currentIndex: state.currentIndex === props.people.length - 1 ? 0 : state.currentIndex + 1
});

export const setPreviousIndex = (state, props) => ({
  currentIndex: state.currentIndex === 0 ? props.people.length - 1 : state.currentIndex - 1
});