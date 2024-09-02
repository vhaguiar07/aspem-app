  export interface Autarquia {
    id: string;
    orgao: string;
    classificacao: string;
    matricula: string;
    matriculaSocial: number;
    dataAdmissao: Date;
    nomeSocio: string;
    endereco: string;
    numero: number;
    complemento: string;
    bairroResidencia: string;
    cidadeResidencia: string;
    uf: string;
    cepResidencia: string;
    telefoneResidencia: string;
    telefoneCelular: string;
    telefoneComercial: string;
    falecido: boolean;
    cpf: string;
    rg: string;
    orgaoExpedidor: string;
    dataFalecimento?: Date;
    quantidadeAdventicios: number;
    quantidadeCooperadores: number;
    quantidadeDentCross: number;
    quantidadeOdMed: number;
    seguro: number;
    reversivel: boolean;
    valorDescontoSeguro: string;
    morteNatural: string;
    morteAcidental: string;
    invalidezPermanenteAcidente: string;
    ps: boolean;
    omitido: boolean;
    quantidadeRioPax: number;
    dataNascimento: Date;
    estadoCivil: string;
    email: string;
    quantidadeDependentes: number;
    conjuge: string;
    descontoSocioEfetivo: string;
    historicoSocio: string;
    observacoesPagamentos: string;
    anoFiscal: Date;
    totalJaneiro: number;
    totalFevereiro: number;
    totalMarco: number;
    totalAbril: number;
    totalMaio: number;
    totalJunho: number;
    totalJulho: number;
    totalAgosto: number;
    totalSetembro: number;
    totalOutubro: number;
    totalNovembro: number;
    totalDezembro: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;

    adventicios?: AdventicioAutarquia[];
    cooperadores?: CooperadorAutarquia[];
    dentCross?: DentCrossAutarquia[];
    odMed?: OdMedAutarquia[];
    rioPax?: RioPaxAutarquia[];
    dependentes?: DependenteAutarquia[];
  }

  export interface AdventicioAutarquia {
    id?: string;
    autarquiaId?: string;
    nomeCompleto: string;
  }
  
  export interface CooperadorAutarquia {
    id?: string;
    autarquiaId?: string;
    nomeCompleto: string;
  }

  export interface DentCrossAutarquia {
    id?: string;
    autarquiaId?: string;
    nomeCompleto: string;
  }
  
  export interface OdMedAutarquia {
    id?: string;
    autarquiaId?: string;
    nomeCompleto: string;
    data?: Date;
  }
  
  export interface RioPaxAutarquia {
    id?: string;
    autarquiaId?: string;
    nomeCompleto: string;
    data?: Date;
  }
  
  export interface DependenteAutarquia {
    id?: string;
    autarquiaId?: string;
    nomeCompleto: string;
    dataNascimento?: Date;
  }

  export interface FetchAutarquiasResponse {
    total: number;
    data: Autarquia[];
  }
