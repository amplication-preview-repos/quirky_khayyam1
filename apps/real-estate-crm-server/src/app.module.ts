import { Module } from "@nestjs/common";
import { PropertyModule } from "./property/property.module";
import { ClientModule } from "./client/client.module";
import { AgentAssignmentModule } from "./agentAssignment/agentAssignment.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    PropertyModule,
    ClientModule,
    AgentAssignmentModule,
    AppointmentModule,
    UserModule,
    RoleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
