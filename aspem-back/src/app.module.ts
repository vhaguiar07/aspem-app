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
import { EstadosService } from './estados/estados.service';
import { EstadosController } from './estados/estados.controller';
import { EstadosModule } from './estados/estados.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AutarquiasModule,
    EstadosModule,
    AuthModule,
    PassportModule,
  ],
  controllers: [AppController, AutarquiasController, EstadosController],
  providers: [AppService, PrismaService, AutarquiasService, EstadosService],
})
export class AppModule {}
