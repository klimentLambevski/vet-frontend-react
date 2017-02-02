import { connect } from 'react-redux';
import { getPatients } from './patient.actions';

class PatientsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPatients());
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
