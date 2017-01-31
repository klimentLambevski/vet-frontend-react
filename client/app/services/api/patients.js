import {graphql} from "../gateway/graphql"; export const savePatientCall = (patient) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(patient), 1000);
  });
};

export const fgPatientFields = `
  name
`;

export function getPatient(id) {

  let customers = graphql`{
      customers(limit: 5) {
        user {
          createdAt
          password
          email
          name
        }
        patients(limit: 5, offset: 20) {
          birthDate
          createdAt
          id
        }
      }
    }`;

  customers().then(customers => {
    console.log(customers)
  })
}
