import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Autarquias } from '@prisma/client';
import { CreateAutarquiasDto } from './dto/create-autarquias.dto';

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

  async getAllAutarquias(): Promise<Autarquias[]> {
    return this.prisma.autarquias.findMany();
  }

  async getAutarquiaById(id: string): Promise<Autarquias> {
    const autarquia = await this.prisma.autarquias.findUnique({
      where: { id },
    });
    if (!autarquia) {
      throw new NotFoundException('Autarquia não encontrada');
    }
    return autarquia;
  }
}
