import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {renderSelectField, renderTextField} from '../../common/inputs/inputs';
import {MenuItem} from "material-ui";

const ExaminationForm = ({ handleSubmit, pristine, submitting, patientType }) => (
  <form onSubmit={handleSubmit} autoComplete="off" noValidate>
    <div>
      <Field
        component={renderTextField}
        type="number"
        name="measuredTemperature"
        label="Измерена температура"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="outerExamination"
        label="Надворешен преглед"
        multiLine={true}
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="diagnose"
        label="Диајгноза"
        multiLine={true}
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="therapy"
        label="Терапија"
        multiLine={true}
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="laboratory"
        label="Лабораторија"
        multiLine={true}
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="surgery"
        label="Операција"
        multiLine={true}
      />
    </div>

    <Field
      component={renderSelectField}
      name="immunization.id"
      label="Имунизација"
    >
      {
        patientType && patientType.immunizations.map(immunization =>
          <MenuItem
            key={immunization.id}
            value={immunization.id}
            primaryText={immunization.name}
          />
        )
      }
    </Field>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="notes"
        label="Наод и мислење од лекар"
        multiLine={true}
      />
    </div>

    <div className="form-footer">
      <RaisedButton
        type="submit"
        label="Зачувај"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>


  </form>
);

export { ExaminationForm };
