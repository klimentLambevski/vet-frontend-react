import { ExaminationFormContainer } from '../components/dashboard/examinations/examination-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { connect } from 'react-redux';
import { getExaminations } from '../components/dashboard/examinations/examination.actions';
import { push } from 'react-router-redux';
import { Grid } from '../components/grid/grid';
import {Link} from "react-router";
import {RaisedButton} from "material-ui";

class PatientDetailsView extends React.Component {
  constructor(props) {
    super(props);

    this.onRowClicked = this.onRowClicked.bind(this);
  }

  componentDidMount() {
    this.props.getExaminations(this.props.params.patientId)
  }

  onRowClicked(examination) {
    const { patient } = this.props;
    this.props.push(`/patients/${patient.id}/${examination.id}`);
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

        <Grid
          rows={this.props.examinations}
          id="examinationsGrid"
          _onRowClick={this.onRowClicked}
        />
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

PatientDetailsView = connect(mapStateToProps, { getExaminations, push })(PatientDetailsView);

export { PatientDetailsView };
