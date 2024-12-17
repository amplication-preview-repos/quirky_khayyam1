/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PropertyService } from "../property.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PropertyCreateInput } from "./PropertyCreateInput";
import { Property } from "./Property";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyWhereUniqueInput } from "./PropertyWhereUniqueInput";
import { PropertyUpdateInput } from "./PropertyUpdateInput";
import { AgentAssignmentFindManyArgs } from "../../agentAssignment/base/AgentAssignmentFindManyArgs";
import { AgentAssignment } from "../../agentAssignment/base/AgentAssignment";
import { AgentAssignmentWhereUniqueInput } from "../../agentAssignment/base/AgentAssignmentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PropertyControllerBase {
  constructor(
    protected readonly service: PropertyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Property })
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProperty(
    @common.Body() data: PropertyCreateInput
  ): Promise<Property> {
    return await this.service.createProperty({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        price: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Property] })
  @ApiNestedQuery(PropertyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async properties(@common.Req() request: Request): Promise<Property[]> {
    const args = plainToClass(PropertyFindManyArgs, request.query);
    return this.service.properties({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        price: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async property(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    const result = await this.service.property({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        price: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProperty(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() data: PropertyUpdateInput
  ): Promise<Property | null> {
    try {
      return await this.service.updateProperty({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          price: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProperty(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    try {
      return await this.service.deleteProperty({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          price: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/agentAssignments")
  @ApiNestedQuery(AgentAssignmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AgentAssignment",
    action: "read",
    possession: "any",
  })
  async findAgentAssignments(
    @common.Req() request: Request,
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<AgentAssignment[]> {
    const query = plainToClass(AgentAssignmentFindManyArgs, request.query);
    const results = await this.service.findAgentAssignments(params.id, {
      ...query,
      select: {
        agentName: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/agentAssignments")
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "update",
    possession: "any",
  })
  async connectAgentAssignments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AgentAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      agentAssignments: {
        connect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/agentAssignments")
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "update",
    possession: "any",
  })
  async updateAgentAssignments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AgentAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      agentAssignments: {
        set: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/agentAssignments")
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "update",
    possession: "any",
  })
  async disconnectAgentAssignments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AgentAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      agentAssignments: {
        disconnect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }
}
