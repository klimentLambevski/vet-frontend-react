import { ExaminationFormContainer } from '../components/dashboard/examinations/examination-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { ExaminationList } from '../components/dashboard/examinations/examination-list';
import { connect } from 'react-redux';
import { getExaminations } from '../components/dashboard/examinations/examination.actions';

class PatientDetailsView extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.getExaminations(this.props.params.patientId)
  }

  render() {
    return (
      <section>
        <h1>Patient Details</h1>
        <PatientFormContainer patient={this.props.patient}/>
        <ExaminationFormContainer examination={this.props.examination}/>

        <ExaminationList />
      </section>
    );
  }
}

const getPatientById = (patients, urlParams) => {
  const patient = patients.filter(patient => patient.id === urlParams.patientId);
  return patient.length > 0 ? patient[0] : {};
};

const getExaminationById = (examinations, urlParams) => {
  const examination = examinations.filter(examination => examination.id === urlParams.examinationId);
  return examination.length > 0 ? examination[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  patient: getPatientById(state.patients, ownProps.params),
  patientTypes: state.patientTypes,
  examination: getExaminationById(state.examinations, ownProps.params)
});

PatientDetailsView = connect(mapStateToProps, { getExaminations })(PatientDetailsView);

export { PatientDetailsView };
