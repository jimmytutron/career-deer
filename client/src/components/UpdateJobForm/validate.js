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
