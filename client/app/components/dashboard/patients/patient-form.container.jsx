import { PatientForm } from './patient-form';
import { withFormHandler } from '../../../hocs/with-form-handler';
import * as _ from "lodash";

const validate = (values) => {
  const errors = {};

  ['name', 'birthDate', 'gender', 'type.name']
    .forEach(key => {
      if (!_.get(values, key) || _.get(values, key) === '') {
        _.set(errors, key, 'Задожително поле');
      }
    });

  return errors;
};

const PatientFromRedux = withFormHandler(PatientForm, 'patient', validate);

const PatientFormContainer = ({ patient = {}, savePatient, patientTypes = [], ...rest }) => (
  <section className={rest.className}>
    {
      patient && patient.id ?
        <h4>Измени пациент</h4>
        :
        <h4>Додади нов пациент</h4>
    }

    <PatientFromRedux
      initialValues={patient}
      formItem={patient}
      saveItem={savePatient}
      patientTypes={patientTypes}
    />
  </section>
);

export { PatientFormContainer };
