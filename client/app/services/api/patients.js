import {graphql, handleMutation} from "../gateway/graphql";

const getAll = () => graphql`
  query getPatients{
    customers(limit:10) {
      patients(limit: 2) {
        id
        name
        race
        birthDate
        mbr
        status
        gender
        microchip
        type {
          name
        }
      }
    }
  }`();

const savePatient = (patient, customerId) => handleMutation(graphql`
  mutation addPatient($patient: PatientInput!, $customerId: String!){
    createPatient(patient: $patient, customerId: $customerId) {
      errors {
        message
      }
      patient {
        id
        name
        birthDate
        gender
        mbr
        microchip
        type {
          name
        }
      }
    }
  }
`({customerId, patient}), 'createPatient');

const updatePatient = (patient, patientId) => handleMutation(graphql`
  mutation updatePatient($patient: PatientInput!, $patientId: String!){
    updatePatient(patient: $patient, patientId: $patientId) {
      errors {
        message
      }
      patient {
        id
        name
        birthDate
        gender
        mbr
        microchip
        type {
          name
        }
      }
    }
  }
`({patientId, patient}), 'updatePatient');

export const PatientApi = {
  getAll,
  savePatient,
  updatePatient
};
