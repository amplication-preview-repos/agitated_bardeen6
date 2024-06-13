import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FaceDataUpdateInput = {
  facialFeatures?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
