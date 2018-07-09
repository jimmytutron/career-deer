export const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please input the job title'
  };
  if (!values.company_name) {
    errors.company_name = 'Please specify the company the job is for'
  };
  return errors;
};

export const warn = values => {
  const warnings = {};
  if (!values.location) {
    warnings.location = 'You have not entered a location for the job posting'
  };
  if (!values.url) {
    warnings.url = 'You have not entered a url link for this job'
  };
  if (!values.post_date) {
    warnings.post_date = 'The posting date will default to the current day unless specified'
  };
  return warnings;
};
