import { IsOptional, IsArray, ValidateNested, IsString, IsNumber, IsBoolean, IsDate, IsEmail, Min } from 'class-validator';
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
  @Min(0)
  quantidadeAdventicios?: number = 0;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeCooperadores?: number = 0;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeDentCross?: number = 0;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeOdMed?: number = 0;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeRioPax?: number = 0;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeDependentes?: number = 0;

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

export class UpdateAdventicioAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class UpdateCooperadorAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class UpdateDependenteAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dataNascimento?: Date;
}

export class UpdateDentCrossAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class UpdateRioPaxAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class UpdateOdMedAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class UpdateAutarquiasDto {
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
  @IsOptional()
  nomeSocio?: string;

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
  @IsDate()
  @Type(() => Date)
  dataNascimento?: Date;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeAdventicios?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeCooperadores?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeDentCross?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeOdMed?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeRioPax?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  quantidadeDependentes?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateAdventicioAutarquiaDto)
  @IsArray()
  @IsAdventiciosCountValid('quantidadeAdventicios')
  adventicios?: UpdateAdventicioAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateCooperadorAutarquiaDto)
  @IsArray()
  @IsCooperadoresCountValid('quantidadeCooperadores')
  cooperadores?: UpdateCooperadorAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateDependenteAutarquiaDto)
  @IsArray()
  @IsDependentesCountValid('quantidadeDependentes')
  dependentes?: UpdateDependenteAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateDentCrossAutarquiaDto)
  @IsArray()
  @IsDentCrossCountValid('quantidadeDentCross')
  dentCross?: UpdateDentCrossAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateRioPaxAutarquiaDto)
  @IsArray()
  @IsRioPaxCountValid('quantidadeRioPax')
  rioPax?: UpdateRioPaxAutarquiaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateOdMedAutarquiaDto)
  @IsArray()
  @IsOdMedCountValid('quantidadeOdMed')
  odMed?: UpdateOdMedAutarquiaDto[];

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
