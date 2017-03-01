import { withFormHandler } from '../../../../hocs/with-form-handler';
import { PateintTypeForm } from './patient-type-form';

const PatientTypeFormRedux = withFormHandler(PateintTypeForm, 'patientType');

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
