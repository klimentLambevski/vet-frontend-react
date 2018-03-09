import { graphql, handleMutation } from "../gateway/graphql";
import * as _ from "lodash";

const getAll = () => graphql`
  query getExaminations {
    patient {
      examinations(order: "reverse:createdAt") {
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
  }`();

const saveExamination = (examination, patientId, immunizationId) => handleMutation(graphql`
  mutation addExamination($examination: ExaminationInput!, $patientId: String!, $immunizationId: String) {
    createExamination(examination: $examination, patientId: $patientId, immunizationId: $immunizationId) {
      errors {
        message
        path
        type 
        value
      }
      examination {
        id
        measuredTemperature
        diagnose
        laboratory
        outerExamination
        surgery
        therapy
        createdAt
        updatedAt
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
`({ examination, patientId, immunizationId }), 'createExamination');

const updateExamination = (examination, examinationId, immunizationId) => handleMutation(graphql`
  mutation updateExamination($examination: ExaminationInput!, $examinationId: String!, $immunizationId: String) {
    updateExamination(examination: $examination, examinationId: $examinationId, immunizationId: $immunizationId) {
      errors {
        message
        path
        type
        value
      }
      examination {
        id
        measuredTemperature
        diagnose
        laboratory
        outerExamination
        surgery
        therapy
        createdAt
        updatedAt
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
`({ examination: _.pick(examination, ['measuredTemperature', 'diagnose', 'laboratory', 'outerExamination', 'surgery', 'therapy', 'notes']), examinationId }), 'updateExamination');

export const ExaminationApi = {
  getAll,
  saveExamination,
  updateExamination
};
