import { withFormHandler } from '../../../../hocs/with-form-handler';
import { PateintTypeForm } from './patient-type-form';

const PatientTypeFormRedux = withFormHandler(PateintTypeForm, 'patientType');

let PatientTypeFormContainer = ({}) => (
  <section>
    <h1>Patient Type</h1>

    <PatientTypeFormRedux
    />
  </section>
);
