export const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Please enter a password.'
  }
  if (values.password !== values.passwordRepeat) {
    errors.passwordRepeat = 'Your passwords do not match'
  }
  return errors;
};
