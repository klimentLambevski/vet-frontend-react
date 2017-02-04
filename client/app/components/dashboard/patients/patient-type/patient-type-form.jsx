import { Field } from 'redux-form';
import { renderTextField } from '../../../common/inputs/inputs';
import RaisedButton from 'material-ui/RaisedButton';


const PateintTypeForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="name"
        label="Patient Type"
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

export { PateintTypeForm };
