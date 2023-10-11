export const validate = (key, pattern) => {
  if (pattern.test(key)) return true;

  return null;
};
