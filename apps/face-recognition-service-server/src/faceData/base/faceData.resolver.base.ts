/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FaceData } from "./FaceData";
import { FaceDataCountArgs } from "./FaceDataCountArgs";
import { FaceDataFindManyArgs } from "./FaceDataFindManyArgs";
import { FaceDataFindUniqueArgs } from "./FaceDataFindUniqueArgs";
import { CreateFaceDataArgs } from "./CreateFaceDataArgs";
import { UpdateFaceDataArgs } from "./UpdateFaceDataArgs";
import { DeleteFaceDataArgs } from "./DeleteFaceDataArgs";
import { User } from "../../user/base/User";
import { FaceDataService } from "../faceData.service";
@graphql.Resolver(() => FaceData)
export class FaceDataResolverBase {
  constructor(protected readonly service: FaceDataService) {}

  async _faceDataItemsMeta(
    @graphql.Args() args: FaceDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FaceData])
  async faceDataItems(
    @graphql.Args() args: FaceDataFindManyArgs
  ): Promise<FaceData[]> {
    return this.service.faceDataItems(args);
  }

  @graphql.Query(() => FaceData, { nullable: true })
  async faceData(
    @graphql.Args() args: FaceDataFindUniqueArgs
  ): Promise<FaceData | null> {
    const result = await this.service.faceData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FaceData)
  async createFaceData(
    @graphql.Args() args: CreateFaceDataArgs
  ): Promise<FaceData> {
    return await this.service.createFaceData({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FaceData)
  async updateFaceData(
    @graphql.Args() args: UpdateFaceDataArgs
  ): Promise<FaceData | null> {
    try {
      return await this.service.updateFaceData({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FaceData)
  async deleteFaceData(
    @graphql.Args() args: DeleteFaceDataArgs
  ): Promise<FaceData | null> {
    try {
      return await this.service.deleteFaceData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: FaceData): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
