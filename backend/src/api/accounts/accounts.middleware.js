import { extractToken } from "../../lib/jwt-utils.js";
import { getLogger } from "../../lib/debug.js";
import { getAccountCollection } from "../../lib/db/connector.js";

const log = getLogger("account:middleware");

export const authenticateAccountRequest = async (req, res, next) => {
  if (req.user && req.user._id) {
    return next();
  }
  try {
    const token = req.headers["x-account-token"];
    const { email } = extractToken(token);
    const Accounts = await getAccountCollection();
    req.user = await Accounts.findOne({ email });
    if (!req.user) throw new Error(`user not found!, email:${email}`);
    req.user.auth_provider = "account";
  } catch (e) {
    log.debug("failed to authenticate", e.message);
  }
  return next();
};

export async function accountGuard(req, res, next) {
  if (!req.user || req.user.auth_provider !== "account") {
    return res.status(401).send();
  }
  return next();
}