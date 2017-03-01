import { connect } from 'react-redux';
import { getPatientTypes } from '../components/dashboard/patients/patient-type/patient-type.actions';

class PatientTypesView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPatientTypes());
  }

  render() {
    return (
      <section className="patient-types-view">
        {this.props.children}
      </section>
    );
  }
}

PatientTypesView = connect()(PatientTypesView);

export { PatientTypesView };
