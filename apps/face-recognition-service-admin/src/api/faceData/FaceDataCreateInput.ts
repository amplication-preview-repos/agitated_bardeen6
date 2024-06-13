import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FaceDataCreateInput = {
  facialFeatures?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
