const callToApi = (data) => {
  return fetch('https://localhost:4000/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default callToApi;
