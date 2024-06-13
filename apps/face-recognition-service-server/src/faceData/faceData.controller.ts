import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaceDataService } from "./faceData.service";
import { FaceDataControllerBase } from "./base/faceData.controller.base";

@swagger.ApiTags("faceData")
@common.Controller("faceData")
export class FaceDataController extends FaceDataControllerBase {
  constructor(protected readonly service: FaceDataService) {
    super(service);
  }
}
