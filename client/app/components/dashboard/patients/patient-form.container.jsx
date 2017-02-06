import { connect } from 'react-redux';
import { PatientForm } from './patient-form';
import { savePatient } from './patient.actions';
import { withFormHandler } from '../../../hocs/with-form-handler';
import { withRouter } from 'react-router';

const PatientFromRedux = withFormHandler(PatientForm, 'patient');

let PatientFormContainer = ({ patient, savePatient, patientTypes = [], ...rest }) => (
  <section className={rest.className}>
    {patient && patient.id ? <h4>Измени пациент</h4>: <h4>Додади нов пациент</h4>}
    <PatientFromRedux
      initialValues={patient}
      formItem={patient}
      saveItem={savePatient}
      patientTypes={patientTypes}
    />
  </section>
);

const mapStateToProps = (state, ownProps) => ({
  patientTypes: state.patientTypes
});

PatientFormContainer = withRouter(connect(mapStateToProps, { savePatient })(PatientFormContainer));

export { PatientFormContainer };
