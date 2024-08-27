import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Autarquias } from '@prisma/client';
import { CreateAutarquiasDto, UpdateAutarquiasDto } from './dto/create-autarquias.dto';

@Injectable()
export class AutarquiasService {
  constructor(private readonly prisma: PrismaService) {}

  async createAutarquia(data: CreateAutarquiasDto): Promise<Autarquias> {
    return this.prisma.autarquias.create({
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
        adventiciosAutarquia: {
          create: data.adventicios?.map(adventicio => ({
            nomeCompleto: adventicio.nomeCompleto,
          })) || [],
        },
        dentCrossesAutarquia: {
          create: data.dentCross?.map(beneficiario => ({
            nomeCompleto: beneficiario.nomeCompleto,
          })) || [],
        },
        odMedsAutarquia: {
          create: data.odMed?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        rioPaxesAutarquia: {
          create: data.rioPax?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        dependentesAutarquia: {
          create: data.dependentes?.map(dependente => ({
            nomeCompleto: dependente.nomeCompleto,
            dataNascimento: dependente.dataNascimento,
          })) || [],
        },
        cooperadoresAutarquia: {
          create: data.cooperadores?.map(cooperador => ({
            nomeCompleto: cooperador.nomeCompleto,
          })) || [],
        },
      },
    });
  }

  async getAllAutarquias(page: number = 1, limit: number = 10): Promise<{ total: number; data: Autarquias[] }> {
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const total = await this.prisma.autarquias.count({
      where: {
        deletedAt: null,
      },
    });

    const data = await this.prisma.autarquias.findMany({
      skip: skip,
      take: limitNumber,
      include: {
        adventiciosAutarquia: true,
        dentCrossesAutarquia: true,
        odMedsAutarquia: true,
        rioPaxesAutarquia: true,
        dependentesAutarquia: true,
        cooperadoresAutarquia: true,
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

  async getAutarquiaById(id: string): Promise<Autarquias> {
    const autarquia = await this.prisma.autarquias.findUnique({
      where: { id },
      include: {
        adventiciosAutarquia: true,
        dentCrossesAutarquia: true,
        odMedsAutarquia: true,
        rioPaxesAutarquia: true,
        dependentesAutarquia: true,
        cooperadoresAutarquia: true,
      },
    });
    if (!autarquia) {
      throw new NotFoundException('Autarquia não encontrada');
    }
    return autarquia;
  }

  async updateAutarquia(id: string, data: UpdateAutarquiasDto): Promise<Autarquias> {
    const existingAutarquia = await this.prisma.autarquias.findUnique({
      where: { id },
      include: {
        adventiciosAutarquia: true,
        dentCrossesAutarquia: true,
        odMedsAutarquia: true,
        rioPaxesAutarquia: true,
        dependentesAutarquia: true,
        cooperadoresAutarquia: true,
      },
    });

    if (!existingAutarquia) {
      throw new NotFoundException('Autarquia não encontrada');
    }

    return this.prisma.autarquias.update({
      where: { id },
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
        adventiciosAutarquia: {
          deleteMany: {},
          create: data.adventicios?.map(adventicio => ({
            nomeCompleto: adventicio.nomeCompleto,
          })) || [],
        },
        dentCrossesAutarquia: {
          deleteMany: {},
          create: data.dentCross?.map(beneficiario => ({
            nomeCompleto: beneficiario.nomeCompleto,
          })) || [],
        },
        odMedsAutarquia: {
          deleteMany: {},
          create: data.odMed?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        rioPaxesAutarquia: {
          deleteMany: {},
          create: data.rioPax?.map(item => ({
            nomeCompleto: item.nomeCompleto,
            data: item.data,
          })) || [],
        },
        dependentesAutarquia: {
          deleteMany: {},
          create: data.dependentes?.map(dependente => ({
            nomeCompleto: dependente.nomeCompleto,
            dataNascimento: dependente.dataNascimento,
          })) || [],
        },
        cooperadoresAutarquia: {
          deleteMany: {},
          create: data.cooperadores?.map(cooperador => ({
            nomeCompleto: cooperador.nomeCompleto,
          })) || [],
        },
      },
      include: {
        adventiciosAutarquia: true,
        dentCrossesAutarquia: true,
        odMedsAutarquia: true,
        rioPaxesAutarquia: true,
        dependentesAutarquia: true,
        cooperadoresAutarquia: true,
      },
    });
  }

}
