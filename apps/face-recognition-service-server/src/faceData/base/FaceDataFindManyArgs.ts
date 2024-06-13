/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FaceDataWhereInput } from "./FaceDataWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FaceDataOrderByInput } from "./FaceDataOrderByInput";

@ArgsType()
class FaceDataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FaceDataWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FaceDataWhereInput, { nullable: true })
  @Type(() => FaceDataWhereInput)
  where?: FaceDataWhereInput;

  @ApiProperty({
    required: false,
    type: [FaceDataOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FaceDataOrderByInput], { nullable: true })
  @Type(() => FaceDataOrderByInput)
  orderBy?: Array<FaceDataOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FaceDataFindManyArgs as FaceDataFindManyArgs };
