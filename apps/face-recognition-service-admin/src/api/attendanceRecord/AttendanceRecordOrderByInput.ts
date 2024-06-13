import { SortOrder } from "../../util/SortOrder";

export type AttendanceRecordOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
