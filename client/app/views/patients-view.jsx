import { connect } from 'react-redux';
import { getPatientTypes } from '../components/dashboard/patients/patient-type/patient-type.actions';

class PatientsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPatientTypes());
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
