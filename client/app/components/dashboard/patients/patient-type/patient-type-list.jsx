import { connect } from 'react-redux';
import { Link } from 'react-router';

let PatientTypeList = ({ patientTypes }) => (
  <section>
    <h1>Patient Types List</h1>

    <ul>
      {
        patientTypes.map(patientType =>
          <li key={patientType.id}>
            <Link to={'/patient-types/' + patientType.id}>
              {patientType.name}
            </Link>
          </li>
        )
      }
    </ul>
  </section>
);

PatientTypeList.propTypes = {
  patientTypes: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  patientTypes: state.patientTypes
});

PatientTypeList = connect(mapStateToProps)(PatientTypeList);

export { PatientTypeList };
