import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../common/inputs/inputs';

//TODO handle validation in one place or use some library for validation
const validate = (values) => {
  const errors = {};

  ['email', 'password']
    .forEach(key => {
      if (!values[key] || values[key] === '') {
        errors[key] = 'Required';
      }
    });

  return errors;
};

//TODO form style -> wrap the form in the paper
const LoginForm = ({ handleSubmit, pristine, submitting, invalid }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="email"
        label="Email"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="password"
        name="password"
        label="Password"
      />
    </div>

    <div style={{marginTop: '20px'}}>
      <RaisedButton
        type="submit"
        label="Sign In"
        primary={true}
        disabled={pristine || submitting || invalid}
      />
    </div>
  </form>
);

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);
