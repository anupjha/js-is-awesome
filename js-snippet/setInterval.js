function _setInterval(fn, delay) {
  // wrap the original function, recursively call the wrapper function with setTimeout
  const wrapper = () => {
    fn();
    return setTimeout(wrapper, delay);
  };
  setTimeout(wrapper, delay);
}
_setInterval(console.log.bind(null, "hello world"), 1000);
