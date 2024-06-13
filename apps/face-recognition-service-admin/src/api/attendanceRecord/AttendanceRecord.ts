import { User } from "../user/User";

export type AttendanceRecord = {
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
