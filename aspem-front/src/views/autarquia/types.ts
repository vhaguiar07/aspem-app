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
    dentCross: number;
    odMed: number;
    seguro: number;
    reversivel: boolean;
    valorDescontoSeguro: string;
    morteNatural: string;
    morteAcidental: string;
    invalidezPermanenteAcidente: string;
    ps: boolean;
    omitido: boolean;
    rioPax: number;
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
  
    // Adicionando as relações
    adventiciosAutarquia?: AdventicioAutarquia[];
    dentCrossesAutarquia?: DentCrossAutarquia[];
    odMedsAutarquia?: OdMedAutarquia[];
    rioPaxesAutarquia?: RioPaxAutarquia[];
    dependentesAutarquia?: DependenteAutarquia[];
  }
  
  // Definições básicas para as interfaces relacionadas
  export interface AdventicioAutarquia {
    id: string;
    descricao: string; // Substitua conforme necessário
  }
  
  export interface DentCrossAutarquia {
    id: string;
    valor: number; // Substitua conforme necessário
  }
  
  export interface OdMedAutarquia {
    id: string;
    valor: number; // Substitua conforme necessário
  }
  
  export interface RioPaxAutarquia {
    id: string;
    valor: number; // Substitua conforme necessário
  }
  
  export interface DependenteAutarquia {
    id: string;
    nome: string; // Substitua conforme necessário
  }
