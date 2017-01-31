export function createFragment(object) {

}

export function graphql([query]) {
  return (variables) => {
    let body = {
      query: query,
      variables: variables

    };
    console.log(body);
    return fetch('/test/graphql',{
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  }
}
