import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/inputs/inputs';

const ImmunizationForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div>
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
          name="description"
          label="Description"
        />
      </div>


      <div>
      {/*TODO field array*/}
      </div>

      <RaisedButton
        type="submit"
        label="Save"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);

export { ImmunizationForm };
