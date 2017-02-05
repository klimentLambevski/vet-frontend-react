import { graphql, handleMutation } from '../gateway/graphql';

const getAll = () => graphql`
  query getAllPatientTypes {
    patientTypes {
      id
      name
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

export const PatientTypeApi = {
  getAll,
  save
};
