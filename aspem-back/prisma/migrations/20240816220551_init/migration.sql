/*
  Warnings:

  - You are about to drop the `CooperadorAutarquia` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nomeCompleto` to the `AdventicioAutarquia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DentCrossAutarquia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `DependenteAutarquia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `DependenteAutarquia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `OdMedAutarquia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `OdMedAutarquia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `RioPaxAutarquia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `RioPaxAutarquia` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CooperadorAutarquia" DROP CONSTRAINT "CooperadorAutarquia_autarquiaId_fkey";

-- AlterTable
ALTER TABLE "AdventicioAutarquia" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DentCrossAutarquia" ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DependenteAutarquia" ADD COLUMN     "dataNascimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OdMedAutarquia" ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RioPaxAutarquia" ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;

-- DropTable
DROP TABLE "CooperadorAutarquia";
