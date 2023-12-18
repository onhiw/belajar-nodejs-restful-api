import { ResponeError } from "../error/respone-error.js";

const validate = (shcema, request) => {
  const result = shcema.validate(request);

  if (result.error) {
    throw new ResponeError(400, result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
