/*
  Warnings:

  - Added the required column `nomeCompleto` to the `AdventicioEstados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `AdventicioMunicipios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `CooperadorBC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `CooperadorEstados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `CooperadorMunicipios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DentCrossBC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DentCrossEstados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DentCrossMunicipios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DependenteBC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DependenteEstados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DependenteMunicipios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `OdMedBC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `OdMedEstados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `OdMedMunicipios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `RioPaxBC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `RioPaxEstados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `RioPaxMunicipios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AdventicioEstados" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AdventicioMunicipios" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CooperadorBC" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CooperadorEstados" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CooperadorMunicipios" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DentCrossBC" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DentCrossEstados" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DentCrossMunicipios" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DependenteBC" ADD COLUMN     "dataNascimento" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DependenteEstados" ADD COLUMN     "dataNascimento" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DependenteMunicipios" ADD COLUMN     "dataNascimento" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OdMedBC" ADD COLUMN     "data" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OdMedEstados" ADD COLUMN     "data" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OdMedMunicipios" ADD COLUMN     "data" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RioPaxBC" ADD COLUMN     "data" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RioPaxEstados" ADD COLUMN     "data" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RioPaxMunicipios" ADD COLUMN     "data" TIMESTAMP(3),
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CooperadorAutarquia" (
    "id" TEXT NOT NULL,
    "autarquiaId" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,

    CONSTRAINT "CooperadorAutarquia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CooperadorAutarquia" ADD CONSTRAINT "CooperadorAutarquia_autarquiaId_fkey" FOREIGN KEY ("autarquiaId") REFERENCES "Autarquias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
