const hello = () => {
  return fetch('/.netlify/functions/hello').then((response) => {
console.log(response,'as');
    return response.json();
  });
};

export default {
  hello,
};
