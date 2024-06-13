import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type FaceData = {
  createdAt: Date;
  facialFeatures: JsonValue;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
