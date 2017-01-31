import PatientFormContainer from './patient-form.container';

export default class PatientsPage extends React.Component {
  render() {
    return (
      <section>
        <h1>Patient</h1>
        <PatientFormContainer />
      </section>
    );
  }
}
