import { connect } from 'react-redux';
import { getPatients } from '../components/dashboard/patients/patient.actions';
import { getPatientTypes } from '../components/dashboard/patients/patient-type/patient-type.actions';
import { getExaminations } from '../components/dashboard/examinations/examination.actions';

class PatientsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPatients());
    this.props.dispatch(getPatientTypes());
    this.props.dispatch(getExaminations());
  }

  render() {
    return (
      <section>
        <h1>Patients</h1>

        {this.props.children}
      </section>
    );
  }
}

PatientsView = connect()(PatientsView);

export { PatientsView };
