import { graphql, handleMutation} from "../gateway/graphql"; import * as _ from "lodash";

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
      }
    }
  }`();

const saveExamination = (examination, patientId) => handleMutation(graphql`
  mutation addExamination($examination: ExaminationInput!, $patientId: String!) {
    createExamination(examination: $examination, patientId: $patientId) {
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
        createdAt
        updatedAt
      }
    }
  }
`({ examination, patientId }), 'createExamination');

const updateExamination = (examination, examinationId) => handleMutation(graphql`
  mutation updateExamination($examination: ExaminationInput!, $examinationId: String!) {
    updateExamination(examination: $examination, examinationId: $examinationId) {
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
        createdAt
        updatedAt
      }
    }
  }
`({ examination: _.pick(examination, ['measuredTemperature', 'diagnose', 'laboratory', 'outerExamination', 'surgery']), examinationId }), 'updateExamination');

export const ExaminationApi = {
  getAll,
  saveExamination,
  updateExamination
};
