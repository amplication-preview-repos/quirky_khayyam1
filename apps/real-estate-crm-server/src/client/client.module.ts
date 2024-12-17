import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClientModuleBase } from "./base/client.module.base";
import { ClientService } from "./client.service";
import { ClientController } from "./client.controller";

@Module({
  imports: [ClientModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
