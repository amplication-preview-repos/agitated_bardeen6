import { Module } from "@nestjs/common";
import { FaceDataModuleBase } from "./base/faceData.module.base";
import { FaceDataService } from "./faceData.service";
import { FaceDataController } from "./faceData.controller";
import { FaceDataResolver } from "./faceData.resolver";

@Module({
  imports: [FaceDataModuleBase],
  controllers: [FaceDataController],
  providers: [FaceDataService, FaceDataResolver],
  exports: [FaceDataService],
})
export class FaceDataModule {}
