import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PatientForm } from './patient-form';
import { reduxForm } from 'redux-form';
import { savePatient } from './patient.actions';

class PatientFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(patient) {
    this.props.actions.savePatient(patient)
      .then(data => {
        console.log(data);
      });
  }

  render() {
    //TODO do this in other forms.
    const PatientReduxForm = reduxForm({
      form: 'patient'
    })(PatientForm);

    return (
      <section>
        <h1>Patient Form</h1>

        <PatientReduxForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ savePatient }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientFormContainer);
