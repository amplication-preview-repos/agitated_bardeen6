import { AttendanceRecord } from "../attendanceRecord/AttendanceRecord";
import { FaceData } from "../faceData/FaceData";
import { JsonValue } from "type-fest";

export type User = {
  attendanceRecords?: Array<AttendanceRecord>;
  createdAt: Date;
  email: string | null;
  faceDataItems?: Array<FaceData>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
