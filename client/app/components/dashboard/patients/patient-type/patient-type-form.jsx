import { Field } from 'redux-form';
import { renderTextField } from '../../../common/inputs/inputs';


const PateintTypeForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit} noValidate autoComplete="off">
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="name"
        label="Patient Type"
      />
    </div>
  </form>
);

export { PateintTypeForm };
