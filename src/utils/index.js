import { func } from "prop-types";

const compose = (...functions) => component => {
  return functions.reduceRight((wrapped, func) => func(wrapped), component);
};

export default compose;
