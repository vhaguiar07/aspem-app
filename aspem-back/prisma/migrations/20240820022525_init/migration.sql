/*
  Warnings:

  - You are about to drop the column `dentCross` on the `Autarquias` table. All the data in the column will be lost.
  - You are about to drop the column `odMed` on the `Autarquias` table. All the data in the column will be lost.
  - You are about to drop the column `rioPax` on the `Autarquias` table. All the data in the column will be lost.
  - You are about to drop the column `dentCross` on the `BC` table. All the data in the column will be lost.
  - You are about to drop the column `odMed` on the `BC` table. All the data in the column will be lost.
  - You are about to drop the column `rioPax` on the `BC` table. All the data in the column will be lost.
  - You are about to drop the column `dentCross` on the `Estados` table. All the data in the column will be lost.
  - You are about to drop the column `odMed` on the `Estados` table. All the data in the column will be lost.
  - You are about to drop the column `rioPax` on the `Estados` table. All the data in the column will be lost.
  - You are about to drop the column `dentCross` on the `Municipios` table. All the data in the column will be lost.
  - You are about to drop the column `odMed` on the `Municipios` table. All the data in the column will be lost.
  - You are about to drop the column `rioPax` on the `Municipios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Autarquias" DROP COLUMN "dentCross",
DROP COLUMN "odMed",
DROP COLUMN "rioPax",
ADD COLUMN     "quantidadeDentCross" INTEGER,
ADD COLUMN     "quantidadeOdMed" INTEGER,
ADD COLUMN     "quantidadeRioPax" INTEGER;

-- AlterTable
ALTER TABLE "BC" DROP COLUMN "dentCross",
DROP COLUMN "odMed",
DROP COLUMN "rioPax",
ADD COLUMN     "quantidadeDentCross" INTEGER,
ADD COLUMN     "quantidadeOdMed" INTEGER,
ADD COLUMN     "quantidadeRioPax" INTEGER;

-- AlterTable
ALTER TABLE "Estados" DROP COLUMN "dentCross",
DROP COLUMN "odMed",
DROP COLUMN "rioPax",
ADD COLUMN     "quantidadeDentCross" INTEGER,
ADD COLUMN     "quantidadeOdMed" INTEGER,
ADD COLUMN     "quantidadeRioPax" INTEGER;

-- AlterTable
ALTER TABLE "Municipios" DROP COLUMN "dentCross",
DROP COLUMN "odMed",
DROP COLUMN "rioPax",
ADD COLUMN     "quantidadeDentCross" INTEGER,
ADD COLUMN     "quantidadeOdMed" INTEGER,
ADD COLUMN     "quantidadeRioPax" INTEGER;
