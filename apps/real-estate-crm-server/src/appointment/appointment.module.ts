import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppointmentModuleBase } from "./base/appointment.module.base";
import { AppointmentService } from "./appointment.service";
import { AppointmentController } from "./appointment.controller";

@Module({
  imports: [AppointmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
