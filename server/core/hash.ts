import cryto from "crypto";

const SALT = process.env.IP_HASH_SALT ?? "change me";

export function hashIP(ip: string | null | undefined) {
  if (!ip) return null;
  return cryto.createHmac("sha256", SALT).update(ip).digest("hex");
}
