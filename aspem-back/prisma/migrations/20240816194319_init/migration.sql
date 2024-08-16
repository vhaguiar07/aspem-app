/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Customer";

-- CreateTable
CREATE TABLE "Autarquias" (
    "id" TEXT NOT NULL,
    "orgao" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "matriculaSocial" INTEGER NOT NULL,
    "dataAdmissao" TIMESTAMP(3) NOT NULL,
    "nomeSocio" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairroResidencia" TEXT NOT NULL,
    "cidadeResidencia" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cepResidencia" TEXT NOT NULL,
    "telefoneResidencia" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "telefoneComercial" TEXT NOT NULL,
    "falecido" BOOLEAN NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "orgaoExpedidor" TEXT NOT NULL,
    "dataFalecimento" TIMESTAMP(3),
    "quantidadeAdventicios" INTEGER NOT NULL,
    "quantidadeCooperadores" INTEGER NOT NULL,
    "dentCross" INTEGER NOT NULL,
    "odMed" INTEGER NOT NULL,
    "seguro" INTEGER NOT NULL,
    "reversivel" BOOLEAN NOT NULL,
    "valorDescontoSeguro" TEXT NOT NULL,
    "morteNatural" TEXT NOT NULL,
    "morteAcidental" TEXT NOT NULL,
    "invalidezPermanenteAcidente" TEXT NOT NULL,
    "ps" BOOLEAN NOT NULL,
    "omitido" BOOLEAN NOT NULL,
    "rioPax" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantidadeDependentes" INTEGER NOT NULL,
    "conjuge" TEXT NOT NULL,
    "descontoSocioEfetivo" TEXT NOT NULL,
    "historicoSocio" TEXT NOT NULL,
    "observacoesPagamentos" TEXT NOT NULL,
    "anoFiscal" TIMESTAMP(3) NOT NULL,
    "totalJaneiro" INTEGER NOT NULL,
    "totalFevereiro" INTEGER NOT NULL,
    "totalMarco" INTEGER NOT NULL,
    "totalAbril" INTEGER NOT NULL,
    "totalMaio" INTEGER NOT NULL,
    "totalJunho" INTEGER NOT NULL,
    "totalJulho" INTEGER NOT NULL,
    "totalAgosto" INTEGER NOT NULL,
    "totalSetembro" INTEGER NOT NULL,
    "totalOutubro" INTEGER NOT NULL,
    "totalNovembro" INTEGER NOT NULL,
    "totalDezembro" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Autarquias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BC" (
    "id" TEXT NOT NULL,
    "orgao" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "matriculaSocial" INTEGER NOT NULL,
    "dataAdmissao" TIMESTAMP(3) NOT NULL,
    "nomeSocio" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairroResidencia" TEXT NOT NULL,
    "cidadeResidencia" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cepResidencia" TEXT NOT NULL,
    "telefoneResidencia" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "telefoneComercial" TEXT NOT NULL,
    "falecido" BOOLEAN NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "orgaoExpedidor" TEXT NOT NULL,
    "dataFalecimento" TIMESTAMP(3),
    "quantidadeAdventicios" INTEGER NOT NULL,
    "quantidadeCooperadores" INTEGER NOT NULL,
    "dentCross" INTEGER NOT NULL,
    "odMed" INTEGER NOT NULL,
    "seguro" INTEGER NOT NULL,
    "reversivel" BOOLEAN NOT NULL,
    "valorDescontoSeguro" TEXT NOT NULL,
    "morteNatural" TEXT NOT NULL,
    "morteAcidental" TEXT NOT NULL,
    "invalidezPermanenteAcidente" TEXT NOT NULL,
    "ps" BOOLEAN NOT NULL,
    "omitido" BOOLEAN NOT NULL,
    "rioPax" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantidadeDependentes" INTEGER NOT NULL,
    "conjuge" TEXT NOT NULL,
    "descontoSocioEfetivo" TEXT NOT NULL,
    "historicoSocio" TEXT NOT NULL,
    "observacoesPagamentos" TEXT NOT NULL,
    "anoFiscal" TIMESTAMP(3) NOT NULL,
    "totalJaneiro" INTEGER NOT NULL,
    "totalFevereiro" INTEGER NOT NULL,
    "totalMarco" INTEGER NOT NULL,
    "totalAbril" INTEGER NOT NULL,
    "totalMaio" INTEGER NOT NULL,
    "totalJunho" INTEGER NOT NULL,
    "totalJulho" INTEGER NOT NULL,
    "totalAgosto" INTEGER NOT NULL,
    "totalSetembro" INTEGER NOT NULL,
    "totalOutubro" INTEGER NOT NULL,
    "totalNovembro" INTEGER NOT NULL,
    "totalDezembro" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "BC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estados" (
    "id" TEXT NOT NULL,
    "orgao" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "matriculaSocial" INTEGER NOT NULL,
    "dataAdmissao" TIMESTAMP(3) NOT NULL,
    "nomeSocio" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairroResidencia" TEXT NOT NULL,
    "cidadeResidencia" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cepResidencia" TEXT NOT NULL,
    "telefoneResidencia" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "telefoneComercial" TEXT NOT NULL,
    "falecido" BOOLEAN NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "orgaoExpedidor" TEXT NOT NULL,
    "dataFalecimento" TIMESTAMP(3),
    "quantidadeAdventicios" INTEGER NOT NULL,
    "quantidadeCooperadores" INTEGER NOT NULL,
    "dentCross" INTEGER NOT NULL,
    "odMed" INTEGER NOT NULL,
    "seguro" INTEGER NOT NULL,
    "reversivel" BOOLEAN NOT NULL,
    "valorDescontoSeguro" TEXT NOT NULL,
    "morteNatural" TEXT NOT NULL,
    "morteAcidental" TEXT NOT NULL,
    "invalidezPermanenteAcidente" TEXT NOT NULL,
    "ps" BOOLEAN NOT NULL,
    "omitido" BOOLEAN NOT NULL,
    "rioPax" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantidadeDependentes" INTEGER NOT NULL,
    "conjuge" TEXT NOT NULL,
    "descontoSocioEfetivo" TEXT NOT NULL,
    "historicoSocio" TEXT NOT NULL,
    "observacoesPagamentos" TEXT NOT NULL,
    "anoFiscal" TIMESTAMP(3) NOT NULL,
    "totalJaneiro" INTEGER NOT NULL,
    "totalFevereiro" INTEGER NOT NULL,
    "totalMarco" INTEGER NOT NULL,
    "totalAbril" INTEGER NOT NULL,
    "totalMaio" INTEGER NOT NULL,
    "totalJunho" INTEGER NOT NULL,
    "totalJulho" INTEGER NOT NULL,
    "totalAgosto" INTEGER NOT NULL,
    "totalSetembro" INTEGER NOT NULL,
    "totalOutubro" INTEGER NOT NULL,
    "totalNovembro" INTEGER NOT NULL,
    "totalDezembro" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Municipios" (
    "id" TEXT NOT NULL,
    "orgao" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "matriculaSocial" INTEGER NOT NULL,
    "dataAdmissao" TIMESTAMP(3) NOT NULL,
    "nomeSocio" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairroResidencia" TEXT NOT NULL,
    "cidadeResidencia" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cepResidencia" TEXT NOT NULL,
    "telefoneResidencia" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "telefoneComercial" TEXT NOT NULL,
    "falecido" BOOLEAN NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "orgaoExpedidor" TEXT NOT NULL,
    "dataFalecimento" TIMESTAMP(3),
    "quantidadeAdventicios" INTEGER NOT NULL,
    "quantidadeCooperadores" INTEGER NOT NULL,
    "dentCross" INTEGER NOT NULL,
    "odMed" INTEGER NOT NULL,
    "seguro" INTEGER NOT NULL,
    "reversivel" BOOLEAN NOT NULL,
    "valorDescontoSeguro" TEXT NOT NULL,
    "morteNatural" TEXT NOT NULL,
    "morteAcidental" TEXT NOT NULL,
    "invalidezPermanenteAcidente" TEXT NOT NULL,
    "ps" BOOLEAN NOT NULL,
    "omitido" BOOLEAN NOT NULL,
    "rioPax" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantidadeDependentes" INTEGER NOT NULL,
    "conjuge" TEXT NOT NULL,
    "descontoSocioEfetivo" TEXT NOT NULL,
    "historicoSocio" TEXT NOT NULL,
    "observacoesPagamentos" TEXT NOT NULL,
    "anoFiscal" TIMESTAMP(3) NOT NULL,
    "totalJaneiro" INTEGER NOT NULL,
    "totalFevereiro" INTEGER NOT NULL,
    "totalMarco" INTEGER NOT NULL,
    "totalAbril" INTEGER NOT NULL,
    "totalMaio" INTEGER NOT NULL,
    "totalJunho" INTEGER NOT NULL,
    "totalJulho" INTEGER NOT NULL,
    "totalAgosto" INTEGER NOT NULL,
    "totalSetembro" INTEGER NOT NULL,
    "totalOutubro" INTEGER NOT NULL,
    "totalNovembro" INTEGER NOT NULL,
    "totalDezembro" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Municipios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdventicioAutarquia" (
    "id" TEXT NOT NULL,
    "autarquiaId" TEXT NOT NULL,

    CONSTRAINT "AdventicioAutarquia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CooperadorAutarquia" (
    "id" TEXT NOT NULL,
    "autarquiaId" TEXT NOT NULL,

    CONSTRAINT "CooperadorAutarquia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DentCrossAutarquia" (
    "id" TEXT NOT NULL,
    "autarquiaId" TEXT NOT NULL,

    CONSTRAINT "DentCrossAutarquia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OdMedAutarquia" (
    "id" TEXT NOT NULL,
    "autarquiaId" TEXT NOT NULL,

    CONSTRAINT "OdMedAutarquia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RioPaxAutarquia" (
    "id" TEXT NOT NULL,
    "autarquiaId" TEXT NOT NULL,

    CONSTRAINT "RioPaxAutarquia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DependenteAutarquia" (
    "id" TEXT NOT NULL,
    "autarquiaId" TEXT NOT NULL,

    CONSTRAINT "DependenteAutarquia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdventicioBC" (
    "id" TEXT NOT NULL,
    "bcId" TEXT NOT NULL,

    CONSTRAINT "AdventicioBC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CooperadorBC" (
    "id" TEXT NOT NULL,
    "bcId" TEXT NOT NULL,

    CONSTRAINT "CooperadorBC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DentCrossBC" (
    "id" TEXT NOT NULL,
    "bcId" TEXT NOT NULL,

    CONSTRAINT "DentCrossBC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OdMedBC" (
    "id" TEXT NOT NULL,
    "bcId" TEXT NOT NULL,

    CONSTRAINT "OdMedBC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RioPaxBC" (
    "id" TEXT NOT NULL,
    "bcId" TEXT NOT NULL,

    CONSTRAINT "RioPaxBC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DependenteBC" (
    "id" TEXT NOT NULL,
    "bcId" TEXT NOT NULL,

    CONSTRAINT "DependenteBC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdventicioEstados" (
    "id" TEXT NOT NULL,
    "estadosId" TEXT NOT NULL,

    CONSTRAINT "AdventicioEstados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CooperadorEstados" (
    "id" TEXT NOT NULL,
    "estadosId" TEXT NOT NULL,

    CONSTRAINT "CooperadorEstados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DentCrossEstados" (
    "id" TEXT NOT NULL,
    "estadosId" TEXT NOT NULL,

    CONSTRAINT "DentCrossEstados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OdMedEstados" (
    "id" TEXT NOT NULL,
    "estadosId" TEXT NOT NULL,

    CONSTRAINT "OdMedEstados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RioPaxEstados" (
    "id" TEXT NOT NULL,
    "estadosId" TEXT NOT NULL,

    CONSTRAINT "RioPaxEstados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DependenteEstados" (
    "id" TEXT NOT NULL,
    "estadosId" TEXT NOT NULL,

    CONSTRAINT "DependenteEstados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdventicioMunicipios" (
    "id" TEXT NOT NULL,
    "municipiosId" TEXT NOT NULL,

    CONSTRAINT "AdventicioMunicipios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CooperadorMunicipios" (
    "id" TEXT NOT NULL,
    "municipiosId" TEXT NOT NULL,

    CONSTRAINT "CooperadorMunicipios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DentCrossMunicipios" (
    "id" TEXT NOT NULL,
    "municipiosId" TEXT NOT NULL,

    CONSTRAINT "DentCrossMunicipios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OdMedMunicipios" (
    "id" TEXT NOT NULL,
    "municipiosId" TEXT NOT NULL,

    CONSTRAINT "OdMedMunicipios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RioPaxMunicipios" (
    "id" TEXT NOT NULL,
    "municipiosId" TEXT NOT NULL,

    CONSTRAINT "RioPaxMunicipios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DependenteMunicipios" (
    "id" TEXT NOT NULL,
    "municipiosId" TEXT NOT NULL,

    CONSTRAINT "DependenteMunicipios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Autarquias_cpf_key" ON "Autarquias"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Autarquias_email_key" ON "Autarquias"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BC_cpf_key" ON "BC"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "BC_email_key" ON "BC"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Estados_cpf_key" ON "Estados"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Estados_email_key" ON "Estados"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Municipios_cpf_key" ON "Municipios"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Municipios_email_key" ON "Municipios"("email");

-- AddForeignKey
ALTER TABLE "AdventicioAutarquia" ADD CONSTRAINT "AdventicioAutarquia_autarquiaId_fkey" FOREIGN KEY ("autarquiaId") REFERENCES "Autarquias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CooperadorAutarquia" ADD CONSTRAINT "CooperadorAutarquia_autarquiaId_fkey" FOREIGN KEY ("autarquiaId") REFERENCES "Autarquias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentCrossAutarquia" ADD CONSTRAINT "DentCrossAutarquia_autarquiaId_fkey" FOREIGN KEY ("autarquiaId") REFERENCES "Autarquias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OdMedAutarquia" ADD CONSTRAINT "OdMedAutarquia_autarquiaId_fkey" FOREIGN KEY ("autarquiaId") REFERENCES "Autarquias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RioPaxAutarquia" ADD CONSTRAINT "RioPaxAutarquia_autarquiaId_fkey" FOREIGN KEY ("autarquiaId") REFERENCES "Autarquias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DependenteAutarquia" ADD CONSTRAINT "DependenteAutarquia_autarquiaId_fkey" FOREIGN KEY ("autarquiaId") REFERENCES "Autarquias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdventicioBC" ADD CONSTRAINT "AdventicioBC_bcId_fkey" FOREIGN KEY ("bcId") REFERENCES "BC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CooperadorBC" ADD CONSTRAINT "CooperadorBC_bcId_fkey" FOREIGN KEY ("bcId") REFERENCES "BC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentCrossBC" ADD CONSTRAINT "DentCrossBC_bcId_fkey" FOREIGN KEY ("bcId") REFERENCES "BC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OdMedBC" ADD CONSTRAINT "OdMedBC_bcId_fkey" FOREIGN KEY ("bcId") REFERENCES "BC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RioPaxBC" ADD CONSTRAINT "RioPaxBC_bcId_fkey" FOREIGN KEY ("bcId") REFERENCES "BC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DependenteBC" ADD CONSTRAINT "DependenteBC_bcId_fkey" FOREIGN KEY ("bcId") REFERENCES "BC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdventicioEstados" ADD CONSTRAINT "AdventicioEstados_estadosId_fkey" FOREIGN KEY ("estadosId") REFERENCES "Estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CooperadorEstados" ADD CONSTRAINT "CooperadorEstados_estadosId_fkey" FOREIGN KEY ("estadosId") REFERENCES "Estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentCrossEstados" ADD CONSTRAINT "DentCrossEstados_estadosId_fkey" FOREIGN KEY ("estadosId") REFERENCES "Estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OdMedEstados" ADD CONSTRAINT "OdMedEstados_estadosId_fkey" FOREIGN KEY ("estadosId") REFERENCES "Estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RioPaxEstados" ADD CONSTRAINT "RioPaxEstados_estadosId_fkey" FOREIGN KEY ("estadosId") REFERENCES "Estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DependenteEstados" ADD CONSTRAINT "DependenteEstados_estadosId_fkey" FOREIGN KEY ("estadosId") REFERENCES "Estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdventicioMunicipios" ADD CONSTRAINT "AdventicioMunicipios_municipiosId_fkey" FOREIGN KEY ("municipiosId") REFERENCES "Municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CooperadorMunicipios" ADD CONSTRAINT "CooperadorMunicipios_municipiosId_fkey" FOREIGN KEY ("municipiosId") REFERENCES "Municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentCrossMunicipios" ADD CONSTRAINT "DentCrossMunicipios_municipiosId_fkey" FOREIGN KEY ("municipiosId") REFERENCES "Municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OdMedMunicipios" ADD CONSTRAINT "OdMedMunicipios_municipiosId_fkey" FOREIGN KEY ("municipiosId") REFERENCES "Municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RioPaxMunicipios" ADD CONSTRAINT "RioPaxMunicipios_municipiosId_fkey" FOREIGN KEY ("municipiosId") REFERENCES "Municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DependenteMunicipios" ADD CONSTRAINT "DependenteMunicipios_municipiosId_fkey" FOREIGN KEY ("municipiosId") REFERENCES "Municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
