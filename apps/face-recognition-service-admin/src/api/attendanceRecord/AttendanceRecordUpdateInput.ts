import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceRecordUpdateInput = {
  status?: "Option1" | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
