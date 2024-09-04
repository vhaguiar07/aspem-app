import { IsOptional, IsArray, ValidateNested, IsString, IsNumber, IsBoolean, IsDate, IsEmail, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { IsAdventiciosCountValid } from '../../is-valid/IsAdventiciosCountValid';
import { IsCooperadoresCountValid } from '../../is-valid/IsCooperadoresCountValid';
import { IsDependentesCountValid } from '../../is-valid/IsDependentesCountValid';
import { IsDentCrossCountValid } from '../../is-valid/IsDentCrossCountValid';
import { IsRioPaxCountValid } from '../../is-valid/IsRioPaxCountValid';
import { IsOdMedCountValid } from '../../is-valid/IsOdMedCountValid';

export class CreateAdventicioEstadoDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class CreateCooperadorEstadoDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class CreateDependenteEstadoDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dataNascimento?: Date;
}

export class CreateDentCrossEstadoDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class CreateRioPaxEstadoDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class CreateOdMedEstadoDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class CreateEstadosDto {
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
  @Type(() => CreateAdventicioEstadoDto)
  @IsArray()
  @IsAdventiciosCountValid('quantidadeAdventicios')
  adventicios?: CreateAdventicioEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateCooperadorEstadoDto)
  @IsArray()
  @IsCooperadoresCountValid('quantidadeCooperadores')
  cooperadores?: CreateCooperadorEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateDependenteEstadoDto)
  @IsArray()
  @IsDependentesCountValid('quantidadeDependentes')
  dependentes?: CreateDependenteEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateDentCrossEstadoDto)
  @IsArray()
  @IsDentCrossCountValid('quantidadeDentCross')
  dentCross?: CreateDentCrossEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateRioPaxEstadoDto)
  @IsArray()
  @IsRioPaxCountValid('quantidadeRioPax')
  rioPax?: CreateRioPaxEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateOdMedEstadoDto)
  @IsArray()
  @IsOdMedCountValid('quantidadeOdMed')
  odMed?: CreateOdMedEstadoDto[];

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

export class UpdateAdventicioEstadoDto {
  @IsString()
  @IsOptional()
  id?: string; // Adicione esta linha

  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class UpdateCooperadorEstadoDto {
  @IsString()
  @IsOptional()
  id?: string; // Adicione esta linha

  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class UpdateDependenteEstadoDto {
  @IsString()
  @IsOptional()
  id?: string; // Adicione esta linha

  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dataNascimento?: Date;
}

export class UpdateDentCrossEstadoDto {
  @IsString()
  @IsOptional()
  id?: string; // Adicione esta linha

  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class UpdateRioPaxEstadoDto {
  @IsString()
  @IsOptional()
  id?: string; // Adicione esta linha

  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class UpdateOdMedEstadoDto {
  @IsString()
  @IsOptional()
  id?: string; // Adicione esta linha

  @IsString()
  @IsOptional()
  nomeCompleto?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  data?: Date;
}

export class UpdateEstadosDto {
  @IsString()
  @IsOptional()
  id?: string;

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
  @Type(() => UpdateAdventicioEstadoDto)
  @IsArray()
  @IsAdventiciosCountValid('quantidadeAdventicios')
  adventicios?: UpdateAdventicioEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateCooperadorEstadoDto)
  @IsArray()
  @IsCooperadoresCountValid('quantidadeCooperadores')
  cooperadores?: UpdateCooperadorEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateDependenteEstadoDto)
  @IsArray()
  @IsDependentesCountValid('quantidadeDependentes')
  dependentes?: UpdateDependenteEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateDentCrossEstadoDto)
  @IsArray()
  @IsDentCrossCountValid('quantidadeDentCross')
  dentCross?: UpdateDentCrossEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateRioPaxEstadoDto)
  @IsArray()
  @IsRioPaxCountValid('quantidadeRioPax')
  rioPax?: UpdateRioPaxEstadoDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateOdMedEstadoDto)
  @IsArray()
  @IsOdMedCountValid('quantidadeOdMed')
  odMed?: UpdateOdMedEstadoDto[];

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
