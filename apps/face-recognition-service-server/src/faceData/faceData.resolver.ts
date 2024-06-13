import * as graphql from "@nestjs/graphql";
import { FaceDataResolverBase } from "./base/faceData.resolver.base";
import { FaceData } from "./base/FaceData";
import { FaceDataService } from "./faceData.service";

@graphql.Resolver(() => FaceData)
export class FaceDataResolver extends FaceDataResolverBase {
  constructor(protected readonly service: FaceDataService) {
    super(service);
  }
}
