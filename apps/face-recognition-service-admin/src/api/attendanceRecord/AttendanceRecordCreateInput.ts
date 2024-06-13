import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceRecordCreateInput = {
  status?: "Option1" | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
