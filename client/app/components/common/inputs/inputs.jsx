import TextField from 'material-ui/TextField';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Field} from 'redux-form';

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    fullWidth={true}
    {...input}
    {...custom}
  />
);

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    fullWidth={true}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

export const renderRadioGroup = ({ input, ...custom }) => (
  <RadioButtonGroup
    {...input}
    {...custom}
    fullWidth={true}
    className="radio-group"
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

export const renderDatePicker = ({ input, meta: { touched, error }, ...custom }) => (
  <DatePicker
    {...input}
    errorText={touched && error}
    onChange={(e, val) => input.onChange(val)}
    fullWidth={true}
    {...custom}
    value={input.value ? new Date(input.value) : null}
  />
);

export const renderInputList = ({ fields, meta: { touched, error }, ...custom }) => (
  <div className="input-list">
    <h4 className="list-label">{custom.label}</h4>
    {fields.map((field, index) =>
      (
        <Field
          component={renderTextField}
          type="number"
          label="Month"
          name={field}
          key={ index }
        />
      )
    )}
    <div className="add-input">
      <FloatingActionButton
        mini={true}
        onClick={() => fields.push()}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
);

