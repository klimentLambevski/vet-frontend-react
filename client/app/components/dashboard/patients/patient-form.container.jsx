import { connect } from 'react-redux';
import { PatientForm } from './patient-form';
import { savePatient } from './patient.actions';
import {withFormHandler} from '../../../hocs/with-form-handler';

const PatientFromRedux = withFormHandler(PatientForm, 'patient');

let PatientFormContainer = ({ patient, savePatient }) => (
  <section>
    <h1>Patient Form</h1>

    <PatientFromRedux
      initialValues={patient}
      formItem={patient}
      saveItem={savePatient}
    />
  </section>
);

const getPatientById = (patients, id) => {
  const patient = patients.filter(patient => patient.id === id);
  return patient.length > 0 ? patient[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  patient: getPatientById(state.patients, ownProps.params.id)
});

PatientFormContainer = connect(mapStateToProps, { savePatient })(PatientFormContainer);

export { PatientFormContainer };
