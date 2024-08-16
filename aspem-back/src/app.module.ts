import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AutarquiasService } from './autarquias/autarquias.service';
import { AutarquiasController } from './autarquias/autarquias.controller';
import { AutarquiasModule } from './autarquias/autarquias.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AutarquiasModule,
    AuthModule,
    PassportModule,
    AutarquiasModule,
  ],
  controllers: [AppController, AutarquiasController],
  providers: [AppService, PrismaService, AutarquiasService],
})
export class AppModule {}
