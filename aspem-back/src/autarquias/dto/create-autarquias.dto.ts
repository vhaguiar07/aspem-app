import { IsOptional, IsArray, ValidateNested, IsString, IsNumber, IsBoolean, IsDate, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { IsAdventiciosCountValid } from './IsAdventiciosCountValid';

export class CreateAdventicioAutarquiaDto {
  @IsString()
  @IsOptional()
  nomeCompleto?: string;
}

export class CreateAutarquiasDto {
  @IsString()
  orgao: string;

  @IsString()
  classificacao: string;

  @IsString()
  matricula: string;

  @IsString()
  matriculaSocial: string;

  dataAdmissao: Date;

  @IsString()
  nomeSocio: string;

  @IsString()
  endereco: string;

  @IsNumber()
  numero: number;

  @IsString()
  @IsOptional()
  complemento?: string;

  @IsString()
  bairroResidencia: string;

  @IsString()
  cidadeResidencia: string;

  @IsString()
  uf: string;

  @IsString()
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
  cpf: string;

  @IsString()
  rg: string;

  @IsString()
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
  dentCross?: number;

  @IsNumber()
  @IsOptional()
  odMed?: number;

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
  rioPax?: number;

  dataNascimento: Date;

  @IsString()
  estadoCivil: string;

  @IsEmail()
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
  @IsArray()
  @IsAdventiciosCountValid('quantidadeAdventicios')
  adventicios?: CreateAdventicioAutarquiaDto[];
}
