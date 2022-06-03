// Function parses date to shorter format.
let milliseconds = 0;
let d = new Date();

export const parseDate = (date) => {
  milliseconds = Date.parse(date);
  let d = new Date(milliseconds);
  return d.toLocaleDateString();
};
