import { AttendanceRecordListRelationFilter } from "../attendanceRecord/AttendanceRecordListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FaceDataListRelationFilter } from "../faceData/FaceDataListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  attendanceRecords?: AttendanceRecordListRelationFilter;
  email?: StringNullableFilter;
  faceDataItems?: FaceDataListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
