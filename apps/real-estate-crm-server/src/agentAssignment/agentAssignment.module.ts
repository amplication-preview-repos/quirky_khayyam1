import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgentAssignmentModuleBase } from "./base/agentAssignment.module.base";
import { AgentAssignmentService } from "./agentAssignment.service";
import { AgentAssignmentController } from "./agentAssignment.controller";

@Module({
  imports: [AgentAssignmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgentAssignmentController],
  providers: [AgentAssignmentService],
  exports: [AgentAssignmentService],
})
export class AgentAssignmentModule {}
