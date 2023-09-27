/*
  Warnings:

  - Added the required column `technology` to the `profuctions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profuctions` ADD COLUMN `technology` VARCHAR(191) NOT NULL;
