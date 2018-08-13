export const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Please input your first name'
  }
  if (!values.lastName) {
    errors.lastName = 'Please input your last name'
  }
  if (!values.email) {
    errors.email = 'You must enter an email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!values.password) {
    errors.password = 'A password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Your password must be at least 6 characters long'
  }
  if (values.password !== values.passwordRepeat){
    errors.passwordRepeat = 'Your passwords do not match'
  }
  return errors;
};

