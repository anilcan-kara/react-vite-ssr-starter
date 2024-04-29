import { u as usePageContext } from "./chunk-DQ-zEVRJ.js";
const useData = () => usePageContext().data;
function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds));
}
export {
  sleep as s,
  useData as u
};
