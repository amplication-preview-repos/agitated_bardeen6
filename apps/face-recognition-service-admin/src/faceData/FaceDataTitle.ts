import { FaceData as TFaceData } from "../api/faceData/FaceData";

export const FACEDATA_TITLE_FIELD = "id";

export const FaceDataTitle = (record: TFaceData): string => {
  return record.id?.toString() || String(record.id);
};
