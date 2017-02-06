import { PatientForm } from './patient-form';
import { savePatient } from './patient.actions';
import { withFormHandler } from '../../../hocs/with-form-handler';

const PatientFromRedux = withFormHandler(PatientForm, 'patient');

const PatientFormContainer = ({ patient = {}, savePatient, patientTypes = [], ...rest }) => (
  <section className={rest.className}>
    {
      patient && patient.id ?
        <h4>Edit patient</h4>
        :
        <h4>Add new patient</h4>
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
