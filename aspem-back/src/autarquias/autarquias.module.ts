import { Module } from '@nestjs/common';
import { AutarquiasController } from './autarquias.controller';
import { AutarquiasService } from './autarquias.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [AutarquiasController],
  providers: [AutarquiasService, PrismaService],
})
export class AutarquiasModule {}
