import { Controller, UseGuards, Post, Body, Get, Query, Patch, Param, NotFoundException, ValidationPipe, BadRequestException, InternalServerErrorException, HttpException, HttpStatus } from '@nestjs/common';
import { AutarquiasService } from './autarquias.service';
import { Autarquias } from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { CreateAutarquiasDto, UpdateAutarquiasDto} from './dto/create-autarquias.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@ApiTags('autarquias')
@ApiBearerAuth('JWT-auth')
@Controller('autarquias')
export class AutarquiasController {
  constructor(private readonly autarquiasService: AutarquiasService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Cria uma nova autarquia' })
  @ApiResponse({ 
    status: 201, 
    description: 'Autarquia criada com sucesso.',
    schema: {
      example: {
        "id": "uuid-1234-5678-91011",
        "orgao": "Nome do Órgão",
        "classificacao": "Classificação do Órgão",
        "matricula": "12345678",
        "matriculaSocial": 1234,
        "dataAdmissao": "2024-08-14T12:34:56.789Z",
        "nomeSocio": "Nome do Sócio",
        "endereco": "Rua Exemplo, 123",
        "numero": 456,
        "complemento": "Apto 789",
        "bairroResidencia": "Bairro Exemplo",
        "cidadeResidencia": "Cidade Exemplo",
        "uf": "SP",
        "cepResidencia": "12345-678",
        "telefoneResidencia": "(11) 1234-5678",
        "telefoneCelular": "(11) 91234-5678",
        "telefoneComercial": "(11) 31234-5678",
        "falecido": false,
        "cpf": "123.456.789-00",
        "rg": "12.345.678-9",
        "orgaoExpedidor": "SSP",
        "dataFalecimento": null,
        "quantidadeAdventicios": 1,
        "quantidadeCooperadores": 1,
        "quantidadeDentCross": 1,
        "quantidadeOdMed": 1,
        "quantidadeRioPax": 1,
        "quantidadeDependentes": 1,
        "reversivel": true,
        "valorDescontoSeguro": "100,00",
        "morteNatural": "50000,00",
        "morteAcidental": "100000,00",
        "invalidezPermanenteAcidente": "75000,00",
        "ps": true,
        "omitido": false,
        "estadoCivil": "Casado",
        "email": "socio@exemplo.com",
        "conjuge": "Nome do Cônjuge",
        "descontoSocioEfetivo": "200,00",
        "historicoSocio": "Histórico do sócio",
        "observacoesPagamentos": "Sem observações",
        "anoFiscal": "2024",
        "totalJaneiro": 1000,
        "totalFevereiro": 1100,
        "totalMarco": 1200,
        "totalAbril": 1300,
        "totalMaio": 1400,
        "totalJunho": 1500,
        "totalJulho": 1600,
        "totalAgosto": 1700,
        "totalSetembro": 1800,
        "totalOutubro": 1900,
        "totalNovembro": 2000,
        "totalDezembro": 2100,
        "createdAt": "2024-08-14T12:34:56.789Z",
        "updatedAt": "2024-08-14T12:34:56.789Z",
        "deletedAt": null,
        "adventicios": [
          {
            "nomeCompleto": "Adventício Teste"
          }
        ],
        "cooperadores": [
          {
            "nomeCompleto": "Cooperador Teste"
          }
        ],
        "dependentes": [
          {
            "nomeCompleto": "Dependente Teste",
            "dataNascimento": "2024-08-14T12:34:56.789Z"
          }
        ],
        "dentCross": [
          {
            "nomeCompleto": "DentCross Teste"
          }
        ],
        "odMed": [
          {
            "nomeCompleto": "OD Med Teste",
            "data": "2024-08-14T12:34:56.789Z"
          }
        ],
        "rioPax": [
          {
            "nomeCompleto": "Rio Pax Teste",
            "data": "2024-08-14T12:34:56.789Z"
          }
        ]
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
          quantidadeAdventicios: 1,
          quantidadeCooperadores: 1,
          quantidadeDentCross: 1,
          quantidadeOdMed: 1,
          quantidadeRioPax: 1,
          quantidadeDependentes: 1,
          reversivel: true,
          valorDescontoSeguro: '100,00',
          morteNatural: '50000,00',
          morteAcidental: '100000,00',
          invalidezPermanenteAcidente: '75000,00',
          ps: true,
          omitido: false,
          estadoCivil: 'Casado',
          email: 'socio@exemplo.com',
          conjuge: 'Nome do Cônjuge',
          descontoSocioEfetivo: '200,00',
          historicoSocio: 'Histórico do sócio',
          observacoesPagamentos: 'Sem observações',
          anoFiscal: '2024',
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
          adventicios: [
            {
              nomeCompleto: 'Adventício Teste'
            }
          ],
          cooperadores: [
            {
              nomeCompleto: 'Cooperador Teste'
            }
          ],
          dependentes: [
            {
              nomeCompleto: 'Dependente Teste',
              dataNascimento: '2024-08-14T12:34:56.789Z'
            }
          ],
          dentCross: [
            {
              nomeCompleto: 'DentCross Teste'
            }
          ],
          odMed: [
            {
              nomeCompleto: 'OD Med Teste',
              data: '2024-08-14T12:34:56.789Z'
            }
          ],
          rioPax: [
            {
              nomeCompleto: 'Rio Pax Teste',
              data: '2024-08-14T12:34:56.789Z'
            }
          ]
        }
      }
    }
  })
  @Post('add')
  async createAutarquia(
    @Body(new ValidationPipe()) createAutarquiasDto: CreateAutarquiasDto,
  ): Promise<Autarquias> {
    try {
      return await this.autarquiasService.createAutarquia(createAutarquiasDto);
    } catch (error) {
      if (error.code === 'P2002') {
        if (error.meta?.target.includes('email')) {
          throw new HttpException(
            'O email já está em uso.',
            HttpStatus.CONFLICT,
          );
        } else if (error.meta?.target.includes('cpf')) {
          throw new HttpException(
            'O CPF já está em uso.',
            HttpStatus.CONFLICT,
          );
        } else {
          throw new HttpException(
            'Dados únicos já estão em uso.',
            HttpStatus.CONFLICT,
          );
        }
      }
      throw new InternalServerErrorException('Erro interno ao criar a autarquia.');
    }
  }


  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Lista todas as autarquias' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
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
          quantidadeAdventicios: 1,
          quantidadeCooperadores: 1,
          quantidadeDentCross: 1,
          quantidadeOdMed: 1,
          quantidadeRioPax: 1,
          quantidadeDependentes: 1,
          reversivel: true,
          valorDescontoSeguro: '100,00',
          morteNatural: '50000,00',
          morteAcidental: '100000,00',
          invalidezPermanenteAcidente: '75000,00',
          ps: true,
          omitido: false,
          estadoCivil: 'Casado',
          email: 'socio@exemplo.com',
          conjuge: 'Nome do Cônjuge',
          descontoSocioEfetivo: '200,00',
          historicoSocio: 'Histórico do sócio',
          observacoesPagamentos: 'Sem observações',
          anoFiscal: '2024',
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
          adventicios: [
            {
              nomeCompleto: 'Adventício Teste'
            }
          ],
          cooperadores: [
            {
              nomeCompleto: 'Cooperador Teste'
            }
          ],
          dependentes: [
            {
              nomeCompleto: 'Dependente Teste',
              dataNascimento: '2024-08-14T12:34:56.789Z'
            }
          ],
          dentCross: [
            {
              nomeCompleto: 'DentCross Teste'
            }
          ],
          odMed: [
            {
              nomeCompleto: 'OD Med Teste',
              data: '2024-08-14T12:34:56.789Z'
            }
          ],
          rioPax: [
            {
              nomeCompleto: 'Rio Pax Teste',
              data: '2024-08-14T12:34:56.789Z'
            }
          ],
          createdAt: '2024-08-14T12:34:56.789Z',
          updatedAt: '2024-08-14T12:34:56.789Z',
          deletedAt: null,
        }
      ]
    }
  })  
  @ApiResponse({ 
    status: 404, 
    description: 'Nenhuma autarquia encontrada.' 
  })
  @Get()
  async getAllAutarquias(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<{ total: number; data: Autarquias[] }> {
    const result = await this.autarquiasService.getAllAutarquias(page, limit);
    
    if (result.data.length === 0) {
      throw new NotFoundException('Nenhuma autarquia encontrada.');
    }
    
    return result;
  }

  @UseGuards(JwtAuthGuard)
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
        quantidadeAdventicios: 1,
        quantidadeCooperadores: 1,
        quantidadeDentCross: 1,
        quantidadeOdMed: 1,
        quantidadeRioPax: 1,
        quantidadeDependentes: 1,
        reversivel: true,
        valorDescontoSeguro: '100,00',
        morteNatural: '50000,00',
        morteAcidental: '100000,00',
        invalidezPermanenteAcidente: '75000,00',
        ps: true,
        omitido: false,
        estadoCivil: 'Casado',
        email: 'socio@exemplo.com',
        conjuge: 'Nome do Cônjuge',
        descontoSocioEfetivo: '200,00',
        historicoSocio: 'Histórico do sócio',
        observacoesPagamentos: 'Sem observações',
        anoFiscal: '2024',
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
        adventicios: [
          {
            nomeCompleto: 'Adventício Teste'
          }
        ],
        cooperadores: [
          {
            nomeCompleto: 'Cooperador Teste'
          }
        ],
        dependentes: [
          {
            nomeCompleto: 'Dependente Teste',
            dataNascimento: '2024-08-14T12:34:56.789Z'
          }
        ],
        dentCross: [
          {
            nomeCompleto: 'DentCross Teste'
          }
        ],
        odMed: [
          {
            nomeCompleto: 'OD Med Teste',
            data: '2024-08-14T12:34:56.789Z'
          }
        ],
        rioPax: [
          {
            nomeCompleto: 'Rio Pax Teste',
            data: '2024-08-14T12:34:56.789Z'
          }
        ],
        createdAt: '2024-08-14T12:34:56.789Z',
        updatedAt: '2024-08-14T12:34:56.789Z',
        deletedAt: null,
      }
    }
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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Atualiza uma autarquia existente' })
  @ApiResponse({ 
    status: 200, 
    description: 'Autarquia atualizada com sucesso.',
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
        quantidadeAdventicios: 1,
        quantidadeCooperadores: 1,
        quantidadeDentCross: 1,
        quantidadeOdMed: 1,
        quantidadeRioPax: 1,
        quantidadeDependentes: 1,
        reversivel: true,
        valorDescontoSeguro: '100,00',
        morteNatural: '50000,00',
        morteAcidental: '100000,00',
        invalidezPermanenteAcidente: '75000,00',
        ps: true,
        omitido: false,
        estadoCivil: 'Casado',
        email: 'socio@exemplo.com',
        conjuge: 'Nome do Cônjuge',
        descontoSocioEfetivo: '200,00',
        historicoSocio: 'Histórico do sócio',
        observacoesPagamentos: 'Sem observações',
        anoFiscal: '2024',
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
        adventicios: [
          {
            nomeCompleto: 'Adventício Teste'
          }
        ],
        cooperadores: [
          {
            nomeCompleto: 'Cooperador Teste'
          }
        ],
        dependentes: [
          {
            nomeCompleto: 'Dependente Teste',
            dataNascimento: '2024-08-14T12:34:56.789Z'
          }
        ],
        dentCross: [
          {
            nomeCompleto: 'DentCross Teste'
          }
        ],
        odMed: [
          {
            nomeCompleto: 'OD Med Teste',
            data: '2024-08-14T12:34:56.789Z'
          }
        ],
        rioPax: [
          {
            nomeCompleto: 'Rio Pax Teste',
            data: '2024-08-14T12:34:56.789Z'
          }
        ],
        createdAt: '2024-08-14T12:34:56.789Z',
        updatedAt: '2024-08-14T12:34:56.789Z',
        deletedAt: null,
      }
    }
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos. Verifique os campos obrigatórios e a validade dos dados fornecidos.' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Autarquia com o ID fornecido não encontrada.' 
  })
  @ApiParam({ 
    name: 'id', 
    description: 'ID da autarquia a ser atualizada', 
    type: String 
  })
  @ApiBody({
    description: 'Dados necessários para atualizar a autarquia.',
    type: UpdateAutarquiasDto,
    examples: {
      example: {
        summary: 'Exemplo de dados para atualização de uma autarquia',
        value: {
          orgao: 'Nome do Órgão Atualizado',
          classificacao: 'Classificação do Órgão Atualizada',
          matricula: '87654321',
          matriculaSocial: 5678,
          dataAdmissao: '2024-08-15T12:34:56.789Z',
          nomeSocio: 'Nome do Sócio Atualizado',
          endereco: 'Rua Exemplo Atualizada, 456',
          numero: 789,
          complemento: 'Apto 123',
          bairroResidencia: 'Bairro Exemplo Atualizado',
          cidadeResidencia: 'Cidade Exemplo Atualizada',
          uf: 'RJ',
          cepResidencia: '23456-789',
          telefoneResidencia: '(21) 2345-6789',
          telefoneCelular: '(21) 91234-5678',
          telefoneComercial: '(21) 31234-5678',
          falecido: true,
          cpf: '987.654.321-00',
          rg: '98.765.432-1',
          orgaoExpedidor: 'SSP',
          dataFalecimento: '2024-08-14T12:34:56.789Z',
          quantidadeAdventicios: 2,
          quantidadeCooperadores: 2,
          quantidadeDentCross: 2,
          quantidadeOdMed: 2,
          quantidadeRioPax: 2,
          quantidadeDependentes: 2,
          reversivel: false,
          valorDescontoSeguro: '200,00',
          morteNatural: '60000,00',
          morteAcidental: '120000,00',
          invalidezPermanenteAcidente: '80000,00',
          ps: false,
          omitido: true,
          estadoCivil: 'Solteiro',
          email: 'socioatualizado@exemplo.com',
          conjuge: 'Nome do Cônjuge Atualizado',
          descontoSocioEfetivo: '250,00',
          historicoSocio: 'Histórico atualizado do sócio',
          observacoesPagamentos: 'Observações atualizadas',
          anoFiscal: '2024',
          totalJaneiro: 2000,
          totalFevereiro: 2200,
          totalMarco: 2400,
          totalAbril: 2600,
          totalMaio: 2800,
          totalJunho: 3000,
          totalJulho: 3200,
          totalAgosto: 3400,
          totalSetembro: 3600,
          totalOutubro: 3800,
          totalNovembro: 4000,
          totalDezembro: 4200,
          adventicios: [
            {
              nomeCompleto: 'Adventício Atualizado'
            }
          ],
          cooperadores: [
            {
              nomeCompleto: 'Cooperador Atualizado'
            }
          ],
          dependentes: [
            {
              nomeCompleto: 'Dependente Atualizado',
              dataNascimento: '2024-08-15T12:34:56.789Z'
            }
          ],
          dentCross: [
            {
              nomeCompleto: 'DentCross Atualizado'
            }
          ],
          odMed: [
            {
              nomeCompleto: 'OD Med Atualizado',
              data: '2024-08-15T12:34:56.789Z'
            }
          ],
          rioPax: [
            {
              nomeCompleto: 'Rio Pax Atualizado',
              data: '2024-08-15T12:34:56.789Z'
            }
          ]
        }
      }
    }
  })
  @Patch(':id')
  async updateAutarquia(
    @Param('id') id: string,
    @Body() updateAutarquiaDto: UpdateAutarquiasDto,
  ) {
    try {
      const updatedAutarquia = await this.autarquiasService.updateAutarquia(id, updateAutarquiaDto);
      if (!updatedAutarquia) {
        throw new NotFoundException(`Autarquia with ID ${id} not found`);
      }
      return updatedAutarquia;
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to update autarquia');
    }
  }

}
