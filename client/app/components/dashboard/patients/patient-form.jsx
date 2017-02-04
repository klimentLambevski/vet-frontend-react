import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import { renderTextField, renderRadioGroup, renderDatePicker } from '../../common/inputs/inputs';

export const PatientForm = ({ handleSubmit, pristine, submitting }) => (
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
        type="date"
        component={renderDatePicker}
        name="birthDate"
        hintText="Birth Date"
        autoOk={true}
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="race"
        label="Race"
      />
    </div>

    <div>
      <Field name="gender" component={renderRadioGroup}>
        <RadioButton value="male" label="male"/>
        <RadioButton value="female" label="female"/>
      </Field>
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="microchip"
        label="Microchip"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="mbr"
        label="MBR"
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
