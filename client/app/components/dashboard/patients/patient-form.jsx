import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { renderTextField, renderRadioGroup, renderDatePicker, renderSelectField } from '../../common/inputs/inputs';

export const PatientForm = ({ handleSubmit, pristine, submitting, patientTypes }) => (
  <form onSubmit={handleSubmit} className="row" autoComplete="off">
    <div className="col-md-6">
      <div>
        <Field
          component={renderTextField}
          type="text"
          name="name"
          label="Име *"
        />
      </div>

      <Field
        component={renderSelectField}
        name="type.name"
        label="Тип на пациент *"
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
          floatingLabelText="Датум на раѓање *"
          autoOk={true}
        />
      </div>
      <div>
        <Field name="gender" component={renderRadioGroup}>
          <RadioButton value="male" label="Мажјак"/>
          <RadioButton value="female" label="Женка"/>
        </Field>
      </div>
    </div>

    <div className="col-md-6">
      <div>
        <Field
          component={renderTextField}
          type="text"
          name="race"
          label="Раса"
        />
      </div>

      <div>
        <Field
          component={renderTextField}
          type="text"
          name="microchip"
          label="Микрочип"
        />
      </div>

      <div>
        <Field
          component={renderTextField}
          type="text"
          name="mbr"
          label="МБР"
        />
      </div>
    </div>

    <div className="col-md-12 form-footer">
      <RaisedButton
        type="submit"
        label="Зачувај"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);
