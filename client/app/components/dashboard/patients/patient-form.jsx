import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { renderTextField, renderRadioGroup, renderDatePicker, renderSelectField } from '../../common/inputs/inputs';

export const PatientForm = ({ handleSubmit, pristine, submitting, patientTypes }) => (
  <form onSubmit={handleSubmit} className="row">
    <div className="col-md-6">
      <div>
        <Field
          component={renderTextField}
          type="text"
          name="name"
          label="Name"
        />
      </div>

      <Field
        component={renderSelectField}
        name="type.name"
        label="Patient Type"
      >
        {
          patientTypes.map(patientType =>
            <MenuItem
              key={patientType.name}
              value={patientType.name}
              primaryText={patientType.name}
            />
          )
        }
      </Field>

      <div>
        <Field
          component={renderDatePicker}
          name="birthDate"
          hintText="Birth Date"
          floatingLabelText="Birth Date"
          autoOk={true}
        />
      </div>
      <div>
        <Field name="gender" component={renderRadioGroup}>
          <RadioButton value="male" label="male"/>
          <RadioButton value="female" label="female"/>
        </Field>
      </div>
    </div>

    <div className="col-md-6">
      <div>
        <Field
          component={renderTextField}
          type="text"
          name="race"
          label="Race"
        />
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
    </div>

    <div className="col-md-12 form-footer">
      <RaisedButton
        type="submit"
        label="Save"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);
