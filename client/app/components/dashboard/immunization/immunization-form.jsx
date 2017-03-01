import { Field, FieldArray } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField, renderInputList } from '../../common/inputs/inputs';

const ImmunizationForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit} noValidate autoComplete="off">
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
        <FieldArray
          name="periods"
          nestedField="month"
          component={renderInputList}
          label="Период на иммунизација"
          fieldLabel="Месец"
          />
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
