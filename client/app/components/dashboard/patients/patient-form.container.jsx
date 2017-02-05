import { connect } from 'react-redux';
import { PatientForm } from './patient-form';
import { savePatient } from './patient.actions';
import { withFormHandler } from '../../../hocs/with-form-handler';
import { withRouter } from 'react-router';

const PatientFromRedux = withFormHandler(PatientForm, 'patient');

let PatientFormContainer = ({ patient, savePatient, patientTypes = [] }) => (
  <section>
    <h1>Patient Form</h1>

    <PatientFromRedux
      initialValues={patient}
      formItem={patient}
      saveItem={savePatient}
      patientTypes={patientTypes}
    />
  </section>
);

const mapStateToProps = (state, ownProps) => ({});

PatientFormContainer = withRouter(connect(mapStateToProps, { savePatient })(PatientFormContainer));

export { PatientFormContainer };
