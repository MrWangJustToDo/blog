export default (action, time = 600) => {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      action.call(this, ...args);
    }, time);
  };
};
