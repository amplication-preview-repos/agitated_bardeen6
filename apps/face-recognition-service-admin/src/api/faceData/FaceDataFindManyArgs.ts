import { FaceDataWhereInput } from "./FaceDataWhereInput";
import { FaceDataOrderByInput } from "./FaceDataOrderByInput";

export type FaceDataFindManyArgs = {
  where?: FaceDataWhereInput;
  orderBy?: Array<FaceDataOrderByInput>;
  skip?: number;
  take?: number;
};
