import { prismaClient } from "../applications/database.js";
import { ResponeError } from "../error/respone-error.js";
import { registerUserValidation } from "../validations/user-validation.js";
import { validate } from "../validations/validation.js";
import bcript from "bcrypt";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new ResponeError(400, "Username already exist");
  }

  user.password = await bcript.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

export default { register };
