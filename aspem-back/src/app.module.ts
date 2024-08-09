import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [UserModule, CustomerModule],
  controllers: [AppController, CustomerController],
  providers: [AppService, PrismaService, CustomerService],
})
export class AppModule {}
