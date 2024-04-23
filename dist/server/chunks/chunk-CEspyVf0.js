function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds));
}
export {
  sleep as s
};
