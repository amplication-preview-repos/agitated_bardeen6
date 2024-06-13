import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceRecordWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
