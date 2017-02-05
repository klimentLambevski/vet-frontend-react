import { graphql } from "../gateway/graphql";

const getAll = () => graphql`
  query getExaminations {
    patient {
      examinations {
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

const saveExamination = (examination, patientId) => graphql`
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
`({ examination, patientId });

export const ExaminationApi = {
  getAll,
  saveExamination
};
