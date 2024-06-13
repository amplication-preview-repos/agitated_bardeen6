import { AttendanceRecordCreateNestedManyWithoutUsersInput } from "./AttendanceRecordCreateNestedManyWithoutUsersInput";
import { FaceDataCreateNestedManyWithoutUsersInput } from "./FaceDataCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  attendanceRecords?: AttendanceRecordCreateNestedManyWithoutUsersInput;
  email?: string | null;
  faceDataItems?: FaceDataCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
