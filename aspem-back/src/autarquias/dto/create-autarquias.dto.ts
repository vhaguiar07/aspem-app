import { IsOptional, IsArray, ValidateNested, IsString, IsNumber, IsBoolean, IsDate, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { IsAdventiciosCountValid } from './IsAdventiciosCountValid';
import { IsCooperadoresCountValid } from './IsCooperadoresCountValid';
import { IsDependentesCountValid } from './IsDependentesCountValid';
import { IsDentCrossCountValid } from './IsDentCrossCountValid';
import { IsRioPaxCountValid } from './IsRioPaxCountValid';
import { IsOdMedCountValid } from './IsOdMedCountValid';

export class CreateAdventicioAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class CreateCooperadorAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
  data?: Date;
}

export class CreateDependenteAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
  dataNascimento?: Date;
}

export class CreateDentCrossAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class CreateRioPaxAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
  data?: Date;
}

export class CreateOdMedAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
  data?: Date;
}


export class CreateAutarquiasDto {
  @IsString()
  @IsOptional()
  orgao: string;

  @IsString()
  @IsOptional()
  classificacao: string;

  @IsString()
  @IsOptional()
  matricula: string;

  @IsString()
  @IsOptional()
  matriculaSocial: string;

  @IsOptional()
  dataAdmissao: Date;

  @IsString()
  nomeSocio: string;

  @IsString()
  @IsOptional()
  endereco: string;

  @IsNumber()
  @IsOptional()
  numero: number;

  @IsString()
  @IsOptional()
  complemento?: string;

  @IsString()
  @IsOptional()
  bairroResidencia: string;

  @IsString()
  @IsOptional()
  cidadeResidencia: string;

  @IsString()
  @IsOptional()
  uf: string;

  @IsString()
  @IsOptional()
  cepResidencia: string;

  @IsString()
  @IsOptional()
  telefoneResidencia?: string;

  @IsString()
  @IsOptional()
  telefoneCelular?: string;

  @IsString()
  @IsOptional()
  telefoneComercial?: string;

  @IsBoolean()
  @IsOptional()
  falecido?: boolean;

  @IsString()
  @IsOptional()
  cpf: string;

  @IsString()
  @IsOptional()
  rg: string;

  @IsString()
  @IsOptional()
  orgaoExpedidor: string;

  @IsOptional()
  dataFalecimento?: Date;

  @IsNumber()
  @IsOptional()
  quantidadeAdventicios: number;

  @IsNumber()
  @IsOptional()
  quantidadeCooperadores?: number;

  @IsNumber()
  @IsOptional()
  quantidadeDentCross?: number;

  @IsNumber()
  @IsOptional()
  quantidadeOdMed?: number;

  @IsNumber()
  @IsOptional()
  seguro?: number;

  @IsBoolean()
  @IsOptional()
  reversivel?: boolean;

  @IsString()
  @IsOptional()
  valorDescontoSeguro?: string;

  @IsString()
  @IsOptional()
  morteNatural?: string;

  @IsString()
  @IsOptional()
  morteAcidental?: string;

  @IsString()
  @IsOptional()
  invalidezPermanenteAcidente?: string;

  @IsBoolean()
  @IsOptional()
  ps?: boolean;

  @IsBoolean()
  @IsOptional()
  omitido?: boolean;

  @IsNumber()
  @IsOptional()
  quantidadeRioPax?: number;

  @IsOptional()
  dataNascimento: Date;

  @IsString()
  @IsOptional()
  estadoCivil: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsNumber()
  @IsOptional()
  quantidadeDependentes?: number;

  @IsString()
  @IsOptional()
  conjuge?: string;

  @IsString()
  @IsOptional()
  descontoSocioEfetivo?: string;

  @IsString()
  @IsOptional()
  historicoSocio?: string;

  @IsString()
  @IsOptional()
  observacoesPagamentos?: string;

  @IsOptional()
  anoFiscal?: string;

  @IsNumber()
  @IsOptional()
  totalJaneiro?: number;

  @IsNumber()
  @IsOptional()
  totalFevereiro?: number;

  @IsNumber()
  @IsOptional()
  totalMarco?: number;

  @IsNumber()
  @IsOptional()
  totalAbril?: number;

  @IsNumber()
  @IsOptional()
  totalMaio?: number;

  @IsNumber()
  @IsOptional()
  totalJunho?: number;

  @IsNumber()
  @IsOptional()
  totalJulho?: number;

  @IsNumber()
  @IsOptional()
  totalAgosto?: number;

  @IsNumber()
  @IsOptional()
  totalSetembro?: number;

  @IsNumber()
  @IsOptional()
  totalOutubro?: number;

  @IsNumber()
  @IsOptional()
  totalNovembro?: number;

  @IsNumber()
  @IsOptional()
  totalDezembro?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAdventicioAutarquiaDto)
  @Type(() => CreateCooperadorAutarquiaDto)
  @Type(() => CreateDependenteAutarquiaDto)
  @Type(() => CreateDentCrossAutarquiaDto)
  @Type(() => CreateRioPaxAutarquiaDto)
  @Type(() => CreateOdMedAutarquiaDto)
  @IsArray()
  @IsAdventiciosCountValid('quantidadeAdventicios')
  @IsCooperadoresCountValid('quantidadeCooperadores')
  @IsDependentesCountValid('quantidadeDependentes')
  @IsDentCrossCountValid('quantidadeDentCross')
  @IsRioPaxCountValid('quantidadeRioPax')
  @IsOdMedCountValid('quantidadeOdMed')
  adventicios?: CreateAdventicioAutarquiaDto[];
  cooperadores?: CreateCooperadorAutarquiaDto[];
  dependentes?: CreateDependenteAutarquiaDto[];
  dentCross?: CreateDentCrossAutarquiaDto[];
  rioPax?: CreateRioPaxAutarquiaDto[];
  odMed?: CreateOdMedAutarquiaDto[];
}
