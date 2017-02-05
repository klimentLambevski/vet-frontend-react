import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

let ExaminationList = ({ examinations, params: { patientId } }) => (
  <section>
    <h1>Examination List</h1>

    <ul>
      {
        examinations.map(examination =>
          <li key={examination.id}>
            <Link to={`/dashboard/patients/${patientId}/${examination.id}`}>
              Examination - {examination.id}
            </Link>
          </li>
        )
      }
    </ul>


  </section>
);

ExaminationList.propTypes = {
  examinations: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  examinations: state.examinations,

});

ExaminationList = withRouter(connect(mapStateToProps)(ExaminationList));

export { ExaminationList };
