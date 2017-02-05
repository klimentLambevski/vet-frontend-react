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

const save = (examination) => graphql`

`({ examination });

export const ExaminationApi = {
  getAll,
  save
};
