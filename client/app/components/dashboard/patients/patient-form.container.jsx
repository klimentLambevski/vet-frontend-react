import { connect } from 'react-redux';
import { PatientForm } from './patient-form';
import { savePatient } from './patient.actions';
import { withFormHandler } from '../../../hocs/with-form-handler';
import { withRouter } from 'react-router';

const PatientFromRedux = withFormHandler(PatientForm, 'patient');

let PatientFormContainer = ({ patient, savePatient, patientTypes = [] }) => (
  <section>
    {patient && patient.id ? <h4>Edit patient</h4>: <h4>Add new patient</h4>}
    <PatientFromRedux
      initialValues={patient}
      formItem={patient}
      saveItem={savePatient}
      patientTypes={patientTypes}
    />
  </section>
);

const getPatientById = (patients, urlParams) => {
  if (!urlParams) return;
  const patient = patients.filter(patient => patient.id === urlParams.id);
  return patient.length > 0 ? patient[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  patient: getPatientById(state.patients, ownProps.params),
  patientTypes: state.patientTypes
});

PatientFormContainer = withRouter(connect(mapStateToProps, { savePatient })(PatientFormContainer));

export { PatientFormContainer };
