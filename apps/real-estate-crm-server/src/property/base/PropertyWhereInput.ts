/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { AgentAssignmentListRelationFilter } from "../../agentAssignment/base/AgentAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EnumPropertyStatus } from "./EnumPropertyStatus";

@InputType()
class PropertyWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AgentAssignmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AgentAssignmentListRelationFilter)
  @IsOptional()
  @Field(() => AgentAssignmentListRelationFilter, {
    nullable: true,
  })
  agentAssignments?: AgentAssignmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  price?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPropertyStatus,
  })
  @IsEnum(EnumPropertyStatus)
  @IsOptional()
  @Field(() => EnumPropertyStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { PropertyWhereInput as PropertyWhereInput };
