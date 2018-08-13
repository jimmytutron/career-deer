export const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please enter an email.'
  };
  return errors;
};
