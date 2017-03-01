import { ImmunizationForm } from './immunization-form';
import { withFormHandler } from '../../../hocs/with-form-handler';


const ImmunizationFormRedux = withFormHandler(ImmunizationForm, 'immunization');

const ImmunizationFormContainer = ({ immunization = {}, saveImmunization, ...rest }) => (
  <section className={rest.className}>
    {
      immunization && immunization.id ?
        <h4>Измени преглед</h4>
        :
        <h4>Додади нов преглед</h4>
    }
    <ImmunizationFormRedux
      initialValues={immunization}
      formItem={immunization}
      saveItem={saveImmunization}
    />
  </section>
);

export { ImmunizationFormContainer };
