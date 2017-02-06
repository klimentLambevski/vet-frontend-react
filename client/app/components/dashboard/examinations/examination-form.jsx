import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/inputs/inputs';

const ExaminationForm = ({ handleSubmit, pristine, submitting }) => (
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
