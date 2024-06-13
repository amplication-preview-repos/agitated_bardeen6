import { AttendanceRecordUpdateManyWithoutUsersInput } from "./AttendanceRecordUpdateManyWithoutUsersInput";
import { FaceDataUpdateManyWithoutUsersInput } from "./FaceDataUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  attendanceRecords?: AttendanceRecordUpdateManyWithoutUsersInput;
  email?: string | null;
  faceDataItems?: FaceDataUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
