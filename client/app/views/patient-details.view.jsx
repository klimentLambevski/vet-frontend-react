import { ExaminationFormContainer } from '../components/dashboard/examinations/examination-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { connect } from 'react-redux';
import { getExaminations, saveExamination } from '../components/dashboard/examinations/examination.actions';
import { push } from 'react-router-redux';
import { Grid } from '../components/grid/grid';
import { Link } from "react-router";
import { RaisedButton } from "material-ui";
import { savePatient } from '../components/dashboard/patients/patient.actions';

class PatientDetailsView extends React.Component {
  constructor(props) {
    super(props);

    this.onRowClicked = this.onRowClicked.bind(this);
  }

  componentDidMount() {
    this.props.getExaminations(this.props.params.patientId)
  }

  onRowClicked(examination) {
    // const { patient } = this.props;
    // this.props.push(`/patients/${patient.id}/${examination.id}`);
  }

  render() {
    const {
      patient,
      savePatient,
      patientTypes,
      examination,
      saveExamination,
      examinations
    } = this.props;

    return (
      <section className="patient-details">
        <div className="patient-details-forms">
          <div className="patient-form">
            <PatientFormContainer
              patient={patient}
              savePatient={savePatient}
              patientTypes={patientTypes}
            />

            <Link to={`/patients/${patient.id}/`}>
              <RaisedButton
                type="button"
                label="Нов прглед"
                fullWidth={true}
                primary={true}
              />
            </Link>
          </div>

          <ExaminationFormContainer
            className="examination-form"
            examination={{ ...examination, patientId: patient.id }}
            saveExamination={saveExamination}
            patientType={patient.type}
          />
        </div>

        <Grid
          rows={examinations}
          columns={{
            createdAt: {
              label: 'Датум',
              type: 'date'
            },
            measuredTemperature: {
              label: 'Измерена темепература'
            },
            outerExamination: {
              label: 'Надворешен прегед'
            },
            laboratory: {
              label: 'Лабораторија'
            },
            diagnose: {
              label: 'Дијагноза'
            },
            therapy: {
              label: 'Терапија'
            },
            surgery: {
              label: 'Операција'
            },
            'immunization.name': {
              label: 'Имунизација'
            },
            notes: {
              label: 'Наод и мислење од доктор'
            },
            'doctor.user.name': {
              label: 'Доктор'
            }
          }}
          id="examinationsGrid"
          _onRowClick={this.onRowClicked}
        />
      </section>
    );
  }
}

const getById = (items, id) => {
  const item = items.filter(item => item.id === id);
  return item.length > 0 ? item[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  patient: getById(state.patients, ownProps.params.patientId),
  examinations: state.examinations,
  examination: getById(state.examinations, ownProps.params.examinationId),
  patientTypes: state.patientTypes
});

PatientDetailsView = connect(mapStateToProps, {
  getExaminations,
  push,
  saveExamination,
  savePatient
})(PatientDetailsView);

export { PatientDetailsView };
