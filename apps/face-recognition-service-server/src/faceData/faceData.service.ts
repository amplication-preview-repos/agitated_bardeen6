import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaceDataServiceBase } from "./base/faceData.service.base";

@Injectable()
export class FaceDataService extends FaceDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
