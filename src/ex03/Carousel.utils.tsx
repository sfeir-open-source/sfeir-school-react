export const setNextIndex = maxLength => (currentIndex: number) => {
  return currentIndex === maxLength ? 0 : currentIndex + 1;
}

export const setPreviousIndex = maxLength => (currentIndex: number) => (
  currentIndex === 0 ? maxLength : currentIndex - 1
);