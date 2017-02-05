import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/inputs/inputs';

export const CustomerForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit} noValidate autoComplete="off">
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="user.name"
        label="First Name"
      />
    </div>
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="user.surname"
        label="Last Name"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="user.email"
        label="Email"
      />
    </div>

    <div className="form-footer">
      <RaisedButton
        type="submit"
        label="Save"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);
