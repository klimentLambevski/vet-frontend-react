import { ExaminationFormContainer } from '../components/dashboard/examinations/examination-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { ExaminationList } from '../components/dashboard/examinations/examination-list';
import { connect } from 'react-redux';
import { getExaminations } from '../components/dashboard/examinations/examination.actions';
import {Link} from "react-router";
import {RaisedButton} from "material-ui";

class PatientDetailsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getExaminations(this.props.params.patientId)
  }

  render() {
    return (
      <section className="patient-details">
        <div className="patient-details-forms">
          <div className="patient-form">
            <PatientFormContainer  patient={this.props.patient}/>
            <Link to={`/patients/${this.props.patient.id}/`}>
              <RaisedButton
                type="button"
                label="New examination"
                fullWidth={true}
                primary={true}
              />
            </Link>
          </div>
          <ExaminationFormContainer className="examination-form" examination={{...this.props.examination, patientId: this.props.patient.id}}/>
        </div>

        <Grid rows={this.props.patients} id="examinationsGrid"/>
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
  examination: getExaminationById(state.examinations, ownProps.params),
  examinations: state.examinations
});

PatientDetailsView = connect(mapStateToProps, { getExaminations })(PatientDetailsView);

export { PatientDetailsView };
