import {handleMutation, graphql} from "../gateway/graphql"; import * as _ from "lodash";

const saveImmunization = (immunization, patientTypeId) => handleMutation(graphql`
  mutation addImmunization($immunization: ImmunizationInput!, $patientTypeId: String!) {
    createImmunization(immunization: $immunization, patientTypeId: $patientTypeId) {
      errors {
        message
        path
        type
        value
      }
      immunization {
        createdAt
        description
        id
        name
        typeId
        periods {
          month
          id
        }
      }
      
    }
  }
`({ immunization: _.pick(immunization, ['name', 'description', 'periods']), patientTypeId }), 'createImmunization');


const updateImmunization = (immunization) => handleMutation(graphql`
  mutation updateImmunization($immunization: ImmunizationInput!, $immunizationId: String!) {
    updateImmunization(immunization: $immunization, immunizationId: $immunizationId) {
      errors {
        message
        path
        type
        value
      }
      immunization {
        createdAt
        description
        id
        name
        typeId
        periods {
          month
          id
        }
      }

    }
  }
`({ immunization: {
  ..._.pick(immunization, ['name', 'description']),
  periods: _.map(immunization.periods, period => ({month: period.month}))
}, immunizationId: immunization.id }), 'updateImmunization');

export const ImmunizationApi = {
  saveImmunization,
  updateImmunization
};
