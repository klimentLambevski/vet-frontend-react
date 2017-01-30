import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/inputs/inputs';

const PatientForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="name"
        label="Name"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="birthDate"
        label="Birth Date"
      />
    </div>

    <div>
      <RaisedButton
        type="submit"
        label="Sign In"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);

export default reduxForm({
  form: 'patient'
})(PatientForm);
