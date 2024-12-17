import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AgentAssignmentService } from "./agentAssignment.service";
import { AgentAssignmentControllerBase } from "./base/agentAssignment.controller.base";

@swagger.ApiTags("agentAssignments")
@common.Controller("agentAssignments")
export class AgentAssignmentController extends AgentAssignmentControllerBase {
  constructor(
    protected readonly service: AgentAssignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
