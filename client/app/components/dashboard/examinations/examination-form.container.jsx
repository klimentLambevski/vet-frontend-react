import { ExaminationForm } from './examination-form';
import { withFormHandler } from '../../../hocs/with-form-handler';
import { saveExamination } from './examination.actions';
import * as _ from "lodash";

const validate = (values) => {
  const errors = {};

  ['measuredTemperature', 'outerExamination', 'diagnose']
    .forEach(key => {
      if (!_.get(values, key) || _.get(values, key) === '') {
        _.set(errors, key, 'Задожително поле');
      }
    });

  return errors;
};

const ExaminationFormRedux = withFormHandler(ExaminationForm, 'examination', validate);

const ExaminationFormContainer = ({ examination, saveExamination, patientType, ...rest }) => {
  return (
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
        patientType={patientType}
      />
    </section>
  );
};

export { ExaminationFormContainer };
