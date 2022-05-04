export const apiPotter = () => {
  return fetch("https://fedeperin-harry-potter-api.herokuapp.com/db").then(
    (res) => res.json()
  );
};
