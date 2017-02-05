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
        label="Measured Temperature"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="outerExamination"
        label="Description"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="diagnose"
        label="Diagnose"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="therapy"
        label="Therapy"
      />
    </div>

    <div>
      <Field
        component={renderTextField}
        type="text"
        name="surgery"
        label="Surgery"
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

export { ExaminationForm };
