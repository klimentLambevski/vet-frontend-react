import { ExaminationForm } from './examination-form';
import { withFormHandler } from '../../../hocs/with-form-handler';
import { saveExamination } from './examination.actions';

const ExaminationFormRedux = withFormHandler(ExaminationForm, 'customer');

const ExaminationFormContainer = ({ examination, saveExamination, ...rest }) => (
  <section className={rest.className}>
    {
      examination && examination.id ?
        <h4>Измени преглед</h4>
        :
        <h4>Додади нов преглед</h4>
    }
    <ExaminationFormRedux
      initialValues={examination}
      formItem={examination}
      saveItem={saveExamination}
    />
  </section>
);

export { ExaminationFormContainer };
