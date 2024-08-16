import { Controller, Post, Body, Get, Param, NotFoundException, ValidationPipe } from '@nestjs/common';
import { AutarquiasService } from './autarquias.service';
import { Autarquias } from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateAutarquiasDto } from './dto/create-autarquias.dto';

@ApiTags('autarquias')
@Controller('autarquias')
export class AutarquiasController {
  constructor(private readonly autarquiasService: AutarquiasService) {}

  @ApiOperation({ summary: 'Cria uma nova autarquia' })
  @ApiResponse({ 
    status: 201, 
    description: 'Autarquia criada com sucesso.',
    schema: {
      example: {
        id: 'uuid-1234-5678-91011',
        orgao: 'Nome do Órgão',
        classificacao: 'Classificação do Órgão',
        matricula: '12345678',
        matriculaSocial: 1234,
        dataAdmissao: '2024-08-14T12:34:56.789Z',
        nomeSocio: 'Nome do Sócio',
        endereco: 'Rua Exemplo, 123',
        numero: 456,
        complemento: 'Apto 789',
        bairroResidencia: 'Bairro Exemplo',
        cidadeResidencia: 'Cidade Exemplo',
        uf: 'SP',
        cepResidencia: '12345-678',
        telefoneResidencia: '(11) 1234-5678',
        telefoneCelular: '(11) 91234-5678',
        telefoneComercial: '(11) 31234-5678',
        falecido: false,
        cpf: '123.456.789-00',
        rg: '12.345.678-9',
        orgaoExpedidor: 'SSP',
        dataFalecimento: null,
        quantidadeAdventicios: 10,
        quantidadeCooperadores: 5,
        dentCross: 2,
        odMed: 3,
        seguro: 1,
        reversivel: true,
        valorDescontoSeguro: '100,00',
        morteNatural: '50000,00',
        morteAcidental: '100000,00',
        invalidezPermanenteAcidente: '75000,00',
        ps: true,
        omitido: false,
        rioPax: 2,
        dataNascimento: '1980-01-01T00:00:00.000Z',
        estadoCivil: 'Casado',
        email: 'socio@exemplo.com',
        quantidadeDependentes: 2,
        conjuge: 'Nome do Cônjuge',
        descontoSocioEfetivo: '200,00',
        historicoSocio: 'Histórico do sócio',
        observacoesPagamentos: 'Sem observações',
        anoFiscal: '2024-01-01T00:00:00.000Z',
        totalJaneiro: 1000,
        totalFevereiro: 1100,
        totalMarco: 1200,
        totalAbril: 1300,
        totalMaio: 1400,
        totalJunho: 1500,
        totalJulho: 1600,
        totalAgosto: 1700,
        totalSetembro: 1800,
        totalOutubro: 1900,
        totalNovembro: 2000,
        totalDezembro: 2100,
        createdAt: '2024-08-14T12:34:56.789Z',
        updatedAt: '2024-08-14T12:34:56.789Z',
        deletedAt: null,
      },
    },
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos. Verifique os campos obrigatórios e a unicidade dos dados como CPF e Email.' 
  })
  @ApiBody({
    description: 'Dados necessários para criar uma nova autarquia.',
    type: CreateAutarquiasDto,
    examples: {
      example: {
        summary: 'Exemplo de dados para criação de uma autarquia',
        value: {
          orgao: 'Nome do Órgão',
          classificacao: 'Classificação do Órgão',
          matricula: '12345678',
          matriculaSocial: 1234,
          dataAdmissao: '2024-08-14T12:34:56.789Z',
          nomeSocio: 'Nome do Sócio',
          endereco: 'Rua Exemplo, 123',
          numero: 456,
          complemento: 'Apto 789',
          bairroResidencia: 'Bairro Exemplo',
          cidadeResidencia: 'Cidade Exemplo',
          uf: 'SP',
          cepResidencia: '12345-678',
          telefoneResidencia: '(11) 1234-5678',
          telefoneCelular: '(11) 91234-5678',
          telefoneComercial: '(11) 31234-5678',
          falecido: false,
          cpf: '123.456.789-00',
          rg: '12.345.678-9',
          orgaoExpedidor: 'SSP',
          quantidadeAdventicios: 10,
          quantidadeCooperadores: 5,
          dentCross: 2,
          odMed: 3,
          seguro: 1,
          reversivel: true,
          valorDescontoSeguro: '100,00',
          morteNatural: '50000,00',
          morteAcidental: '100000,00',
          invalidezPermanenteAcidente: '75000,00',
          ps: true,
          omitido: false,
          rioPax: 2,
          dataNascimento: '1980-01-01T00:00:00.000Z',
          estadoCivil: 'Casado',
          email: 'socio@exemplo.com',
          quantidadeDependentes: 2,
          conjuge: 'Nome do Cônjuge',
          descontoSocioEfetivo: '200,00',
          historicoSocio: 'Histórico do sócio',
          observacoesPagamentos: 'Sem observações',
          anoFiscal: '2024-01-01T00:00:00.000Z',
          totalJaneiro: 1000,
          totalFevereiro: 1100,
          totalMarco: 1200,
          totalAbril: 1300,
          totalMaio: 1400,
          totalJunho: 1500,
          totalJulho: 1600,
          totalAgosto: 1700,
          totalSetembro: 1800,
          totalOutubro: 1900,
          totalNovembro: 2000,
          totalDezembro: 2100,
        },
      },
    },
  })
  @Post()
  async createAutarquia(
    @Body(new ValidationPipe()) createAutarquiasDto: CreateAutarquiasDto,
  ): Promise<Autarquias> {
    return this.autarquiasService.createAutarquia(createAutarquiasDto);
  }

  @ApiOperation({ summary: 'Lista todas as autarquias' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de autarquias encontrada com sucesso.',
    schema: {
      example: [
        {
          id: 'uuid-1234-5678-91011',
          orgao: 'Nome do Órgão',
          classificacao: 'Classificação do Órgão',
          matricula: '12345678',
          matriculaSocial: 1234,
          dataAdmissao: '2024-08-14T12:34:56.789Z',
          nomeSocio: 'Nome do Sócio',
          endereco: 'Rua Exemplo, 123',
          numero: 456,
          complemento: 'Apto 789',
          bairroResidencia: 'Bairro Exemplo',
          cidadeResidencia: 'Cidade Exemplo',
          uf: 'SP',
          cepResidencia: '12345-678',
          telefoneResidencia: '(11) 1234-5678',
          telefoneCelular: '(11) 91234-5678',
          telefoneComercial: '(11) 31234-5678',
          falecido: false,
          cpf: '123.456.789-00',
          rg: '12.345.678-9',
          orgaoExpedidor: 'SSP',
          dataFalecimento: null,
          quantidadeAdventicios: 10,
          quantidadeCooperadores: 5,
          dentCross: 2,
          odMed: 3,
          seguro: 1,
          reversivel: true,
          valorDescontoSeguro: '100,00',
          morteNatural: '50000,00',
          morteAcidental: '100000,00',
          invalidezPermanenteAcidente: '75000,00',
          ps: true,
          omitido: false,
          rioPax: 2,
          dataNascimento: '1980-01-01T00:00:00.000Z',
          estadoCivil: 'Casado',
          email: 'socio@exemplo.com',
          quantidadeDependentes: 2,
          conjuge: 'Nome do Cônjuge',
          descontoSocioEfetivo: '200,00',
          historicoSocio: 'Histórico do sócio',
          observacoesPagamentos: 'Sem observações',
          anoFiscal: '2024-01-01T00:00:00.000Z',
          totalJaneiro: 1000,
          totalFevereiro: 1100,
          totalMarco: 1200,
          totalAbril: 1300,
          totalMaio: 1400,
          totalJunho: 1500,
          totalJulho: 1600,
          totalAgosto: 1700,
          totalSetembro: 1800,
          totalOutubro: 1900,
          totalNovembro: 2000,
          totalDezembro: 2100,
          createdAt: '2024-08-14T12:34:56.789Z',
          updatedAt: '2024-08-14T12:34:56.789Z',
          deletedAt: null,
        },
      ],
    },
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Nenhuma autarquia encontrada.' 
  })
  @Get()
  async getAllAutarquias(): Promise<Autarquias[]> {
    const autarquias = await this.autarquiasService.getAllAutarquias();
    if (autarquias.length === 0) {
      throw new NotFoundException('Nenhuma autarquia encontrada.');
    }
    return autarquias;
  }

  @ApiOperation({ summary: 'Obtém uma autarquia pelo ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Autarquia encontrada com sucesso.',
    schema: {
      example: {
        id: 'uuid-1234-5678-91011',
        orgao: 'Nome do Órgão',
        classificacao: 'Classificação do Órgão',
        matricula: '12345678',
        matriculaSocial: 1234,
        dataAdmissao: '2024-08-14T12:34:56.789Z',
        nomeSocio: 'Nome do Sócio',
        endereco: 'Rua Exemplo, 123',
        numero: 456,
        complemento: 'Apto 789',
        bairroResidencia: 'Bairro Exemplo',
        cidadeResidencia: 'Cidade Exemplo',
        uf: 'SP',
        cepResidencia: '12345-678',
        telefoneResidencia: '(11) 1234-5678',
        telefoneCelular: '(11) 91234-5678',
        telefoneComercial: '(11) 31234-5678',
        falecido: false,
        cpf: '123.456.789-00',
        rg: '12.345.678-9',
        orgaoExpedidor: 'SSP',
        dataFalecimento: null,
        quantidadeAdventicios: 10,
        quantidadeCooperadores: 5,
        dentCross: 2,
        odMed: 3,
        seguro: 1,
        reversivel: true,
        valorDescontoSeguro: '100,00',
        morteNatural: '50000,00',
        morteAcidental: '100000,00',
        invalidezPermanenteAcidente: '75000,00',
        ps: true,
        omitido: false,
        rioPax: 2,
        dataNascimento: '1980-01-01T00:00:00.000Z',
        estadoCivil: 'Casado',
        email: 'socio@exemplo.com',
        quantidadeDependentes: 2,
        conjuge: 'Nome do Cônjuge',
        descontoSocioEfetivo: '200,00',
        historicoSocio: 'Histórico do sócio',
        observacoesPagamentos: 'Sem observações',
        anoFiscal: '2024-01-01T00:00:00.000Z',
        totalJaneiro: 1000,
        totalFevereiro: 1100,
        totalMarco: 1200,
        totalAbril: 1300,
        totalMaio: 1400,
        totalJunho: 1500,
        totalJulho: 1600,
        totalAgosto: 1700,
        totalSetembro: 1800,
        totalOutubro: 1900,
        totalNovembro: 2000,
        totalDezembro: 2100,
        createdAt: '2024-08-14T12:34:56.789Z',
        updatedAt: '2024-08-14T12:34:56.789Z',
        deletedAt: null,
      },
    },
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Autarquia não encontrada com o ID fornecido.' 
  })
  @ApiParam({ name: 'id', type: 'string', description: 'ID da autarquia que será retornada.' })
  @Get(':id')
  async getAutarquiaById(@Param('id') id: string): Promise<Autarquias> {
    const autarquia = await this.autarquiasService.getAutarquiaById(id);
    if (!autarquia) {
      throw new NotFoundException(`Autarquia com ID ${id} não encontrada.`);
    }
    return autarquia;
  }
}
