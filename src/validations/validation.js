import { ResponeError } from "../error/respone-error.js";

const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  });

  if (result.error) {
    throw new ResponeError(400, result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
