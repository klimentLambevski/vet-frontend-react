import { ImmunizationForm } from './immunization-form';
import { withFormHandler } from '../../../hocs/with-form-handler';
import * as _ from "lodash";

const validate = (values) => {
  const errors = {};

  ['name', 'description']
    .forEach(key => {
      if (!_.get(values, key) || _.get(values, key) === '') {
        _.set(errors, key, 'Задожително поле');
      }
    });

  return errors;
};

const ImmunizationFormRedux = withFormHandler(ImmunizationForm, 'immunization', validate);

const ImmunizationFormContainer = ({ immunization = {}, saveImmunization, ...rest }) => (
  <section className={rest.className}>
    {
      immunization && immunization.id ?
        <h4>Измени иммунизација</h4>
        :
        <h4>Додади нова иммунизација</h4>
    }
    <ImmunizationFormRedux
      initialValues={immunization}
      formItem={immunization}
      saveItem={saveImmunization}
    />
  </section>
);

export { ImmunizationFormContainer };
