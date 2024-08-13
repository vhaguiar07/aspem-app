import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Customer } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async createCustomer(nomeCompleto: string, cpf: string): Promise<Customer> {
    return this.prisma.customer.create({
      data: {
        nomeCompleto,
        cpf,
      },
    });
  }

  async getAllCustomers(): Promise<Customer[]> {
    return this.prisma.customer.findMany();
  }

  async getCustomerById(id: string): Promise<Customer | null> {
    return this.prisma.customer.findUnique({
      where: { id: parseInt(id) },
    });
  }
}
