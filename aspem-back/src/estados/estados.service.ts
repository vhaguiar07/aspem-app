import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Estados } from '@prisma/client';
import { CreateEstadosDto, UpdateEstadosDto } from './dto/create-estados.dto';

@Injectable()
export class EstadosService {
  constructor(private readonly prisma: PrismaService) {}

  async createEstado(data: CreateEstadosDto): Promise<Estados> {
    return this.prisma.estados.create({
      data: {
        orgao: data.orgao,
        classificacao: data.classificacao,
        matricula: data.matricula,
        matriculaSocial: data.matriculaSocial,
        dataAdmissao: data.dataAdmissao,
        nomeSocio: data.nomeSocio,
        endereco: data.endereco,
        numero: data.numero,
        complemento: data.complemento,
        bairroResidencia: data.bairroResidencia,
        cidadeResidencia: data.cidadeResidencia,
        uf: data.uf,
        cepResidencia: data.cepResidencia,
        telefoneResidencia: data.telefoneResidencia,
        telefoneCelular: data.telefoneCelular,
        telefoneComercial: data.telefoneComercial,
        falecido: data.falecido,
        cpf: data.cpf,
        rg: data.rg,
        orgaoExpedidor: data.orgaoExpedidor,
        dataFalecimento: data.dataFalecimento,
        quantidadeAdventicios: data.quantidadeAdventicios,
        quantidadeCooperadores: data.quantidadeCooperadores,
        quantidadeDentCross: data.quantidadeDentCross,
        quantidadeOdMed: data.quantidadeOdMed,
        seguro: data.seguro,
        reversivel: data.reversivel,
        valorDescontoSeguro: data.valorDescontoSeguro,
        morteNatural: data.morteNatural,
        morteAcidental: data.morteAcidental,
        invalidezPermanenteAcidente: data.invalidezPermanenteAcidente,
        ps: data.ps,
        omitido: data.omitido,
        quantidadeRioPax: data.quantidadeRioPax,
        dataNascimento: data.dataNascimento,
        estadoCivil: data.estadoCivil,
        email: data.email,
        quantidadeDependentes: data.quantidadeDependentes,
        conjuge: data.conjuge,
        descontoSocioEfetivo: data.descontoSocioEfetivo,
        historicoSocio: data.historicoSocio,
        observacoesPagamentos: data.observacoesPagamentos,
        anoFiscal: data.anoFiscal,
        totalJaneiro: data.totalJaneiro,
        totalFevereiro: data.totalFevereiro,
        totalMarco: data.totalMarco,
        totalAbril: data.totalAbril,
        totalMaio: data.totalMaio,
        totalJunho: data.totalJunho,
        totalJulho: data.totalJulho,
        totalAgosto: data.totalAgosto,
        totalSetembro: data.totalSetembro,
        totalOutubro: data.totalOutubro,
        totalNovembro: data.totalNovembro,
        totalDezembro: data.totalDezembro,
        adventiciosEstados: {
          create: data.adventicios?.map(adventicio => ({
            nomeCompleto: adventicio.nomeCompleto,
          })) || [],
        },
        dentCrossesEstados: {
          create: data.dentCross?.map(beneficiario => ({
            nomeCompleto: beneficiario.nomeCompleto,
          })) || [],
        },
        odMedsEstados: {
          create: data.odMed?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        rioPaxesEstados: {
          create: data.rioPax?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        dependentesEstados: {
          create: data.dependentes?.map(dependente => ({
            nomeCompleto: dependente.nomeCompleto,
            dataNascimento: dependente.dataNascimento,
          })) || [],
        },
        cooperadoresEstados: {
          create: data.cooperadores?.map(cooperador => ({
            nomeCompleto: cooperador.nomeCompleto,
          })) || [],
        },
      },
    });
  }

  async getAllEstados(page: number = 1, limit: number = 10): Promise<{ total: number; data: Estados[] }> {
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const total = await this.prisma.estados.count({
      where: {
        deletedAt: null,
      },
    });

    const data = await this.prisma.estados.findMany({
      skip: skip,
      take: limitNumber,
      include: {
        adventiciosEstados: true,
        dentCrossesEstados: true,
        odMedsEstados: true,
        rioPaxesEstados: true,
        dependentesEstados: true,
        cooperadoresEstados: true,
      },
      where: {
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  
    return { total, data };
  }

  async getEstadoById(id: string): Promise<Estados> {
    const estado = await this.prisma.estados.findUnique({
      where: { id },
      include: {
        adventiciosEstados: true,
        dentCrossesEstados: true,
        odMedsEstados: true,
        rioPaxesEstados: true,
        dependentesEstados: true,
        cooperadoresEstados: true,
      },
    });
    if (!estado) {
      throw new NotFoundException('Estado não encontrada');
    }
    return estado;
  }

  async updateEstado(id: string, data: UpdateEstadosDto): Promise<Estados> {
    const existingEstado = await this.prisma.estados.findUnique({
      where: { id },
      include: {
        adventiciosEstados: true,
        dentCrossesEstados: true,
        odMedsEstados: true,
        rioPaxesEstados: true,
        dependentesEstados: true,
        cooperadoresEstados: true,
      },
    });

    if (!existingEstado) {
      throw new NotFoundException('Estado não encontrada');
    }

    return this.prisma.estados.update({
      where: { id },
      data: {
        orgao: data.orgao,
        classificacao: data.classificacao,
        matricula: data.matricula,
        matriculaSocial: data.matriculaSocial,
        dataAdmissao: data.dataAdmissao ?? null,
        nomeSocio: data.nomeSocio,
        endereco: data.endereco,
        numero: data.numero,
        complemento: data.complemento,
        bairroResidencia: data.bairroResidencia,
        cidadeResidencia: data.cidadeResidencia,
        uf: data.uf,
        cepResidencia: data.cepResidencia,
        telefoneResidencia: data.telefoneResidencia,
        telefoneCelular: data.telefoneCelular,
        telefoneComercial: data.telefoneComercial,
        falecido: data.falecido,
        cpf: data.cpf,
        rg: data.rg,
        orgaoExpedidor: data.orgaoExpedidor,
        dataFalecimento: data.dataFalecimento ?? null,
        quantidadeAdventicios: data.quantidadeAdventicios,
        quantidadeCooperadores: data.quantidadeCooperadores,
        quantidadeDentCross: data.quantidadeDentCross,
        quantidadeOdMed: data.quantidadeOdMed,
        seguro: data.seguro,
        reversivel: data.reversivel,
        valorDescontoSeguro: data.valorDescontoSeguro,
        morteNatural: data.morteNatural,
        morteAcidental: data.morteAcidental,
        invalidezPermanenteAcidente: data.invalidezPermanenteAcidente,
        ps: data.ps,
        omitido: data.omitido,
        quantidadeRioPax: data.quantidadeRioPax,
        dataNascimento: data.dataNascimento ?? null,
        estadoCivil: data.estadoCivil,
        email: data.email,
        quantidadeDependentes: data.quantidadeDependentes,
        conjuge: data.conjuge,
        descontoSocioEfetivo: data.descontoSocioEfetivo,
        historicoSocio: data.historicoSocio,
        observacoesPagamentos: data.observacoesPagamentos,
        anoFiscal: data.anoFiscal,
        totalJaneiro: data.totalJaneiro,
        totalFevereiro: data.totalFevereiro,
        totalMarco: data.totalMarco,
        totalAbril: data.totalAbril,
        totalMaio: data.totalMaio,
        totalJunho: data.totalJunho,
        totalJulho: data.totalJulho,
        totalAgosto: data.totalAgosto,
        totalSetembro: data.totalSetembro,
        totalOutubro: data.totalOutubro,
        totalNovembro: data.totalNovembro,
        totalDezembro: data.totalDezembro,
        adventiciosEstados: {
          deleteMany: {},
          create: data.adventicios?.map(adventicio => ({
            nomeCompleto: adventicio.nomeCompleto,
          })) || [],
        },
        dentCrossesEstados: {
          deleteMany: {},
          create: data.dentCross?.map(beneficiario => ({
            nomeCompleto: beneficiario.nomeCompleto,
          })) || [],
        },
        odMedsEstados: {
          deleteMany: {},
          create: data.odMed?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        rioPaxesEstados: {
          deleteMany: {},
          create: data.rioPax?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        dependentesEstados: {
          deleteMany: {},
          create: data.dependentes?.map(dependente => ({
            nomeCompleto: dependente.nomeCompleto,
            dataNascimento: dependente.dataNascimento,
          })) || [],
        },
        cooperadoresEstados: {
          deleteMany: {},
          create: data.cooperadores?.map(cooperador => ({
            nomeCompleto: cooperador.nomeCompleto,
          })) || [],
        },
      },
      include: {
        adventiciosEstados: true,
        dentCrossesEstados: true,
        odMedsEstados: true,
        rioPaxesEstados: true,
        dependentesEstados: true,
        cooperadoresEstados: true,
      },
    });
  }

  async searchEstados(
    nomeSocio?: string,
    cpf?: string,
    page = 1,
    limit = 10
  ): Promise<{ total: number; data: Estados[] }> {
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const total = await this.prisma.estados.count({
      where: {
        AND: [
          nomeSocio ? { nomeSocio: { contains: nomeSocio, mode: 'insensitive' } } : {},
          cpf ? { cpf: { equals: cpf } } : {},
        ],
      },
    });

    const data = await this.prisma.estados.findMany({
      where: {
        AND: [
          nomeSocio ? { nomeSocio: { contains: nomeSocio, mode: 'insensitive' } } : {},
          cpf ? { cpf: { equals: cpf } } : {},
        ],
      },
      skip,
      take: limitNumber,
    });
  
    return { total, data };
  }

}
