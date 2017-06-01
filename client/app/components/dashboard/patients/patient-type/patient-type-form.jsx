import { Field } from 'redux-form';
import { renderTextField } from '../../../common/inputs/inputs';
import RaisedButton from 'material-ui/RaisedButton';


const PateintTypeForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit} noValidate autoComplete="off">
    <div>
      <Field
        component={renderTextField}
        type="text"
        name="name"
        label="Тип на пациент"
      />
    </div>

    <div>
      <RaisedButton
        type="submit"
        label="Зачувај"
        primary={true}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);

export { PateintTypeForm };
