import { graphql } from '../gateway/graphql';

const getAll = () => graphql`
  {
    patientTypes {
      id
      name
    }
  }
`();

const save = (patientType) => {
  console.log(`save ${patientType}`);
};

export const PatientTypeApi = {
  getAll,
  save
};
