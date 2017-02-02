import TextField from 'material-ui/TextField';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
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
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

export const renderDatePicker = ({ input, meta: { touched, error }, ...custom }) => (
  <DatePicker
    {...input}
    errorText={touched && error}
    onChange={(e, val) => input.onChange(val)}
    {...custom}
    value={input.value ? new Date(input.value) : null}
  />
);
