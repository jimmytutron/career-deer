import React from 'react';
import API from '../../utils/API';


// Redux stuff
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { mapActionsToProps } from '../../actions';
// do the same thing for mapping state to props;
// import { mapStateToProps } from '../';

let ContactForm = props => {
  console.log(props);
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>{/* form body*/}</form>
};


ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm);



const mapStateToProps = state => ({
  app: state.app,
  test: state.test,
  form: state.form
});

const { onUpdateTest, onUpdateApp } = mapActionsToProps();

const actions = {
  onUpdateTest,
  onUpdateApp 
};
// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps,actions)(ContactForm);