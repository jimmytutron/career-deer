export const validate = values => {
  const errors = {}
  if (!values.keywords) {
    errors.keywords = 'Please enter a field or skill'
  }
  if (!values.location) {
    errors.location = 'Please enter a location'
  }
  return errors
}
