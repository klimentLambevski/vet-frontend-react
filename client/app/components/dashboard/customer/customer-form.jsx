import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RadioButton';
import { renderTextField } from '../../common/inputs/inputs';

const CustomerForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="firstName"
        label="firstName"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="lastName"
        label="lastName"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="email"
        label="Email"
      />
    </div>

    <div>
      <RaisedButton
        type="submit"
        label="Save"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);

export default reduxForm({
  form: 'customer'
})(CustomerForm);
