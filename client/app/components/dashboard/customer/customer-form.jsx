import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/inputs/inputs';

const CustomerForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="name"
        label="First Name"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="surname"
        label="Last Name"
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

export { CustomerForm };
