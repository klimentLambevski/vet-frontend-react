import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { PatientForm } from './patient-form';
import { savePatient } from './patient.actions';

const PatientFormRedux = reduxForm({
  form: 'patient',
  enableReinitialize: true
})(PatientForm);

class PatientFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: Object.assign({}, this.props.patient)
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.patient.id !== nextProps.patient.id) {
      this.setState({ patient: nextProps.patient })
    }
  }

  onSubmit(patient) {
    //TODO fix this
    patient.status = 'owned';
    this.props.savePatient(patient);
  }

  render() {
    return (
      <section>
        <h1>Patient Form</h1>

        <PatientFormRedux
          onSubmit={this.onSubmit}
          initialValues={this.state.patient}
        />
      </section>
    );
  }
}

const getPatientById = (patients, id) => {
  const patient = patients.filter(patient => patient.id === id);
  return patient.length > 0 ? patient[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  patient: getPatientById(state.patients, ownProps.params.id)
});

PatientFormContainer = connect(mapStateToProps, { savePatient })(PatientFormContainer);

export { PatientFormContainer };
