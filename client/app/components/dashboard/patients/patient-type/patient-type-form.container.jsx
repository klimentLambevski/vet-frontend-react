import { withFormHandler } from '../../../../hocs/with-form-handler';
import { PateintTypeForm } from './patient-type-form';
import * as _ from "lodash";

const validate = (values) => {
  const errors = {};

  ['name']
    .forEach(key => {
      if (!_.get(values, key) || _.get(values, key) === '') {
        _.set(errors, key, 'Задожително поле');
      }
    });

  return errors;
};


const PatientTypeFormRedux = withFormHandler(PateintTypeForm, 'patientType', validate);

let PatientTypeFormContainer = ({ patientType = {}, savePatientType }) => (
  <section>
    {
      patientType && patientType.id ?
        <h4>Измени тип на пациент</h4>
        :
        <h4>Додади нов тип на пациент</h4>
    }
    <PatientTypeFormRedux
      initialValues={patientType}
      formItem={patientType}
      saveItem={savePatientType}
    />
  </section>
);

export { PatientTypeFormContainer };
