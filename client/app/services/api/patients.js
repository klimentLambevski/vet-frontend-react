export const savePatientCall = (patient) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(patient), 1000);
  });
};

export const fgPatientFields = `
  name
`;

export function getPatient(id) {

  fetch('http://192.168.100.8:3000/test/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: ''
    })
  }).then((res) => {
    console.log(res);
  })
}
