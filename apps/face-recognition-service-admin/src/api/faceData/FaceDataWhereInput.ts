import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FaceDataWhereInput = {
  facialFeatures?: JsonFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
