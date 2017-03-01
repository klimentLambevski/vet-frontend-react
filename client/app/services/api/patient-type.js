import { graphql, handleMutation } from '../gateway/graphql'; import * as _ from "lodash";

const getAll = () => graphql`
  query getAllPatientTypes {
    patientTypes {
      id
      name
      immunizations {
        createdAt
        description
        id
        name
        periods {
          id
          month
        }
      }
    }
  }
`();

const save = (patientType) => handleMutation(graphql`
  mutation addPatientType($patientType: PatientTypeInput!){
    createPatientType(patientType: $patientType) {
      errors {
        message
      }
      patientType {
        id
        name
      }
    }
  }
`({ patientType }), 'createPatientType');

const update = (patientType, patientTypeId) => handleMutation(graphql`
  mutation editPatientType($patientType: PatientTypeInput!, $patientTypeId: String!){
    updatePatientType(patientType: $patientType, patientTypeId: $patientTypeId) {
      errors {
        message
      }
      patientType {
        id
        name
      }
    }
  }
`({ patientType: _.pick(patientType, ['name']), patientTypeId}), 'updatePatientType');

export const PatientTypeApi = {
  getAll,
  save,
  update
};
