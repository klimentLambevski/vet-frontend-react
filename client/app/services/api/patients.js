import {graphql} from "../gateway/graphql";

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

//TODO rename to save
const savePatient = (patient, customerId) => graphql`
  mutation addPatient($patient: PatientInput!, $customerId: String!){
    createPatient(patient: $patient, customerId: $customerId) {
      errors {
        message
      }
      patient {
        id
        name
      }
    }
  }
`({customerId, patient});

export const PatientApi = {
  getAll,
  savePatient
};
