const localserver= 'http://localhost:4000'
const herokuApi = '"https://awesome-cards-picateclas.herokuapp.com'

const callToApi = (data) => {
  console.log(data);
  return fetch(`${localserver}/card`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default callToApi;
