import { withFormHandler } from '../../../../hocs/with-form-handler';
import { connect } from 'react-redux';
import { savePatientType } from './patient-type.actions';
import { PateintTypeForm } from './patient-type-form';

const PatientTypeFormRedux = withFormHandler(PateintTypeForm, 'patientType');

let PatientTypeFormContainer = ({ patientType, savePatientType }) => (
  <section>
    <h1>Patient Type</h1>

    <PatientTypeFormRedux
      formItem={patientType}
      initialValues={patientType}
      saveItem={savePatientType}
    />
  </section>
);

const getPatientTypeById = (patientTypes, id) => {
  const patientType = patientTypes.filter(patientType => patientType.id === id);
  return patientType.length > 0 ? patientType[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  patientType: getPatientTypeById(state.patientTypes, ownProps.params.id)
});

PatientTypeFormContainer = connect(mapStateToProps, { savePatientType })(PatientTypeFormContainer);
export { PatientTypeFormContainer };
