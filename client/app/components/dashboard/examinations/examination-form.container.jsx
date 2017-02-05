import { connect } from 'react-redux';
import { ExaminationForm } from './examination-form';
import { withFormHandler } from '../../../hocs/with-form-handler';
import { saveExamination } from './examination.actions';

let ExaminationFormRedux = withFormHandler(ExaminationForm, 'customer');

let ExaminationFormContainer = ({ examination, saveExamination }) => (
  <section>
    <h1>Examination Form</h1>

    <ExaminationFormRedux
      initialValues={examination}
      formItem={examination}
      saveItem={saveExamination}
    />
  </section>
);

const mapStateToProps = (state, ownProps) => ({

});

ExaminationFormContainer = connect(mapStateToProps, { saveExamination })(ExaminationFormContainer);

export { ExaminationFormContainer };
