import { connect } from 'react-redux';
import { Link } from 'react-router';

let PatientList = ({ patients }) => (
  <section>
    <h1>Patient List</h1>

    <div>
      <Link to={'/patients/new'}>
        {'Add new patient'}
      </Link>

    </div>
    <ul>
      {
        patients.map(patient =>
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}/`}>
              {patient.name}
            </Link>
          </li>
        )
      }
    </ul>
  </section>
);

PatientList.propTypes = {
  patients: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  patients: state.patients
});

PatientList = connect(mapStateToProps)(PatientList);

export { PatientList };
