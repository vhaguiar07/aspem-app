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

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class CreateDependenteAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
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

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class CreateOdMedAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class CreateAutarquiasDto {
  @IsString()
  @IsOptional()
  orgao?: string;

  @IsString()
  @IsOptional()
  classificacao?: string;

  @IsString()
  @IsOptional()
  matricula?: string;

  @IsString()
  @IsOptional()
  matriculaSocial?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dataAdmissao?: Date;

  @IsString()
  nomeSocio: string;

  @IsString()
  @IsOptional()
  endereco?: string;

  @IsNumber()
  @IsOptional()
  numero?: number;

  @IsString()
  @IsOptional()
  complemento?: string;

  @IsString()
  @IsOptional()
  bairroResidencia?: string;

  @IsString()
  @IsOptional()
  cidadeResidencia?: string;

  @IsString()
  @IsOptional()
  uf?: string;

  @IsString()
  @IsOptional()
  cepResidencia?: string;

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
  cpf?: string;

  @IsString()
  @IsOptional()
  rg?: string;

  @IsString()
  @IsOptional()
  orgaoExpedidor?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dataFalecimento?: Date;

  @IsOptional()
  dataNascimento: Date;

  @IsNumber()
  @IsOptional()
  quantidadeAdventicios?: number;

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
  quantidadeRioPax?: number;

  @IsNumber()
  @IsOptional()
  quantidadeDependentes?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAdventicioAutarquiaDto)
  @IsArray()
  @IsAdventiciosCountValid('quantidadeAdventicios')
  adventicios?: CreateAdventicioAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateCooperadorAutarquiaDto)
  @IsArray()
  @IsCooperadoresCountValid('quantidadeCooperadores')
  cooperadores?: CreateCooperadorAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateDependenteAutarquiaDto)
  @IsArray()
  @IsDependentesCountValid('quantidadeDependentes')
  dependentes?: CreateDependenteAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateDentCrossAutarquiaDto)
  @IsArray()
  @IsDentCrossCountValid('quantidadeDentCross')
  dentCross?: CreateDentCrossAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateRioPaxAutarquiaDto)
  @IsArray()
  @IsRioPaxCountValid('quantidadeRioPax')
  rioPax?: CreateRioPaxAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateOdMedAutarquiaDto)
  @IsArray()
  @IsOdMedCountValid('quantidadeOdMed')
  odMed?: CreateOdMedAutarquiaDto[];

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
  seguro?: number;

  @IsString()
  @IsOptional()
  estadoCivil?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

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

  @IsString()
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
}
