import { getAuthCollection } from "../../lib/db/connector";
import { getLogger } from "../../lib/debug";
import {
  comparePassword,
  generateTokenForPayload,
  hashPassword,
} from "../../lib/jwt-utils";
import { generateSession } from "../../lib/sesstion";
import { UserType } from "../../types/user.type";
import {
  emailSchema,
  passwordSchema,
} from "../../validations/auth.validations";

const log = getLogger("auth.service");

export async function getAuthService(project: string) {
  const Users = await getAuthCollection(project);
  return {
    Users,
    async login(email: string, password: string) {
      emailSchema.parse(email);
      passwordSchema.parse(password);

      const user = await Users.findOne({ email });
      if (user) {
        const result = comparePassword(user.password, password);
        return result ? user : null;
      }
      log.debug("user not found with email:", email);
      await new Promise((r) => {
        setTimeout(r, 500 + Math.random() * 500);
      });
      return null;
    },
    async register(email: string, password: string) {
      emailSchema.parse(email);
      passwordSchema.parse(password);

      const exists = await Users.findOne({ email });
      if (exists) throw new Error("account already exists");
      return Users.create({
        email,
        password: hashPassword(password),
      });
    },
    async generateSession(user: UserType) {
      const email = emailSchema.parse(user.email);
      const token = await generateSession({ email });
      return token;
    },
  };
}

export type AuthServiceType = Awaited<ReturnType<typeof getAuthService>>