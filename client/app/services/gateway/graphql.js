import localStorageService from '../../services/storage/local.storage.service';

export function createFragment(object) {

}

export function handleMutation(request, mutationName) {
  return request.then(response => {
    let data = response.data[mutationName];
    if(data.errors) {
      return Promise.reject(data.errors);
    }
    return Promise.resolve(data);
  }).catch(error => Promise.reject(error))
}

export function graphql([query]) {
  return (variables) => {
    let body = {
      query: query,
      variables: variables
    };
    return fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorageService.getItem('AUTH_TOKEN')
      }
    }).then(response => response.json())
  }
}
