export const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Please enter a password.'
  };
  return errors;
};
