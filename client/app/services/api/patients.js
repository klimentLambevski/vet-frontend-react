import {graphql, handleMutation} from "../gateway/graphql"; import * as _ from "lodash";

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

const getById = (patientId) => graphql`
  query getPatient($id: String!) {
    patient(id: $id) {
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
        immunizations {
          id
          name
          description
        }
      }
      examinations {
        id
        measuredTemperature
        outerExamination
        laboratory
        diagnose
        therapy
        surgery
        createdAt
        notes
        immunization {
          id
          name
          description
        }
        doctor {
          user {
            name
          }
        }
      }
    }
  }
`({id: patientId});

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
        race
        type {
          name
          immunizations {
            id
            name
            description
          }
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
          race
          type {
            name
          }
        }
      }
    }
  `({
    patientId,
    patient: _.pick(patient, ['name', 'birthDate', 'mbr', 'microchip', 'type', 'gender', 'race'])
  }),
  'updatePatient');


export const PatientApi = {
  getAll,
  savePatient,
  updatePatient,
  getById
};
