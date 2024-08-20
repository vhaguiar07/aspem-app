/*
  Warnings:

  - Made the column `anoFiscal` on table `Autarquias` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anoFiscal` on table `BC` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anoFiscal` on table `Estados` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anoFiscal` on table `Municipios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Autarquias" ALTER COLUMN "anoFiscal" SET NOT NULL,
ALTER COLUMN "anoFiscal" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "BC" ALTER COLUMN "anoFiscal" SET NOT NULL,
ALTER COLUMN "anoFiscal" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Estados" ALTER COLUMN "anoFiscal" SET NOT NULL,
ALTER COLUMN "anoFiscal" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Municipios" ALTER COLUMN "anoFiscal" SET NOT NULL,
ALTER COLUMN "anoFiscal" SET DATA TYPE TEXT;
